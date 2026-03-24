import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { siteConfig } from '../config';
import { useGetConfigQuery, useSaveConfigMutation } from '@/store/apiSlice';
import {
  setIsAdmin,
  setIsLoginModalOpen,
  logout as logoutAction,
} from '@/store/authSlice';
import { RootState } from '@/store';

interface AdminContextType {
  isAdmin: boolean;
  isLoginModalOpen: boolean;
  config: typeof siteConfig;
  setIsAdmin: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  updateConfig: (path: string, value: any) => void;
  saveConfigToServer: () => Promise<void>;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const emptySiteConfig = {
  siteName: '',
  logo: {
    src: '',
    alt: '',
  },
  home: {
    hero: {
      title: {
        line1: '',
        highlight: '',
        line2: '',
      },
      description: '',
      buttons: [],
      stats: {
        value: '',
        badge: '',
        label: '',
      },
      trustIconNames: [],
      visual: {
        image: '',
        alt: '',
        badgeTitle: '',
        badgeValue: '',
        badgeUnit: '',
      },
    },
    services: {
      header: {
        highlight: '',
        title: '',
        description: ''
      },
      ctaLabel: '',
      items: []
    },
    IndustriesSection: {
      header: {
        highlight: '',
        normalText: '',
      },
      items: []
    },
    LEADERSHIP_DATA: {
      author: {
        name: '',
        role: '',
        image: '',
      },
      quote: {
        part1: '',
        highlight: '',
        part2: '',
        boldSegment: '',
        part3: '',
      },
    },
    WHY_CRESTCODE_DATA: {
      header: {
        mainText: '',
        brandName: ''
      },
      features: []
    },
  },
  service: {
    hero: {
      breadcrumbs: {
        parent: '',
        current: ''
      },
      heading: {
        highlight: '',
        main: '',
        suffix: '',
      },
      description: '',
      cta: {
        text: '',
        targetId: ''
      },
      rating: {
        score: '',
        certification: ''
      },
      features: [],
    },
    SERVICES_DATA: {
      header: {
        main: '',
        highlight: '',
        sub: ''
      },
      services: []
    },
    BANNER: {
      title: '',
      description: '',
      button: {
        text: '',
        link: ''
      },
    },
    FAQ_DATA: {
      header: {
        main: '',
        highlight: '',
        sub: ''
      },
      questions: []
    },
    mvp: {
      header: {
        main: '',
        highlight: '',
        description: ''
      },
      tabs: [],
      footerBadge: ''
    },
    ctaLabel: '',
    services: [],
    PROCESS: {
      header: {
        titlePrefix: '',
        titleHighlight: '',
        description: ''
      },
      phases: []
    },
    Technology: {
      header: {
        titlePrefix: '',
        titleHighlight: '',
        description: ''
      },
      technologies: []
    },
    TESTIMONIAL_DATA: {
      author: {
        name: '',
        role: '',
        image: '',
      },
      quote: {
        prefix: '',
        highlight: '',
        suffix: ''
      },
      settings: {
        quoteIcon: '',
        gridGap: [0, 0] as [number, number],
      },
    },
    SERVICES_CONTENT: {
      sectionHeader: {
        titlePrefix: '',
        titleHighlight: '',
        description: ''
      },
      services: []
    }
  },
  sd_services: {
    HERO_CONTENT: {
      breadcrumbs: [],
      heading: {
        highlight: '',
        main: '',
        muted: ''
      },
      description: '',
      ctas: [],
      socialProof: {
        rating: '',
        tagline: ''
      },
      features: [],
    },
    PROCESS_DATA: {
      header: {
        title: '',
        highlight: '',
        description: ''
      },
      phases: []
    },
    SERVICE_DATA: {
      header: {
        title: '',
        highlight: '',
        suffix: ''
      },
      models: []
    },
    SERVICES_CONTENT: {
      header: {
        title: '',
        highlight: '',
        description: ''
      },
      services: []
    }
  },
  team: {
    TEAM_CONTENT: {
      hero: {
        title: '',
        description: '',
        bg: ''
      },
      culture: {
        title: '',
        description: '',
        image: '',
        accordion: []
      },
      copilot: {
        title: '',
        subtitle: '',
        features: []
      },
      members: {
        title: '',
        ctaLabel: '',
        ctaHref: '',
        groupPhoto: '',
        individual: []
      },
      values: {
        title: '',
        description: '',
        items: []
      },
      IndustriesSection: {
        header: {
          highlight: '',
          normalText: '',
        },
        items: []
      }
    }
  },
  vacancies: {
    VACANCIES_DATA: {
      hero: {
        title: '',
        titleAccent: '',
        description: '',
        cta: {
          text: '',
          link: ''
        }
      },
      jobs: [],
      modal: {
        badge: '',
        ctaText: ''
      }
    }
  }
};

export const AdminProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const { isAdmin, isLoginModalOpen } = useSelector(
    (state: RootState) => state.auth
  );
  const [config, setConfig] = useState<typeof siteConfig>(siteConfig);

  const { data: configData, isLoading, error } = useGetConfigQuery();
  const [saveConfigMutation] = useSaveConfigMutation();

  useEffect(() => {
    console.log('useEffect triggered with configData:', configData);
    if (configData && configData.payload) {
      console.log('Setting config from API payload:', configData.payload.config);
      console.log('IndustriesSection in API payload:', configData.payload.config?.team?.TEAM_CONTENT?.IndustriesSection);
      setConfig(configData.payload.config);
    } else {
      console.log('Falling back to siteConfig');
      console.log('IndustriesSection in siteConfig:', siteConfig?.team?.TEAM_CONTENT?.IndustriesSection);
      setConfig(siteConfig);
    }
  }, [configData]);

  const saveConfigToServer = async () => {
    try {
      await saveConfigMutation({ config }).unwrap();
      console.log('Config saved successfully');
    } catch (error) {
      console.error('Error saving config:', error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        if (!isAdmin) {
          dispatch(setIsLoginModalOpen(true));
        } else {
          dispatch(setIsAdmin(false));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin, dispatch]);

  const updateConfig = async (path: string, value: any) => {
    setConfig((prevConfig) => {
      const newConfig = JSON.parse(JSON.stringify(prevConfig)); // Deep clone to avoid readonly issues
      const keys = path.split('.');
      let current: any = newConfig;

      for (let i = 0; i < keys.length - 1; i++) {
        if (current[keys[i]] === undefined) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;

      // Auto-save to server after updating config
      setTimeout(async () => {
        try {
          await saveConfigMutation({ config: newConfig }).unwrap();
          console.log('Config auto-saved successfully');
        } catch (error) {
          console.error('Error auto-saving config:', error);
        }
      }, 500);

      return newConfig;
    });
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  const handleSetIsAdmin = (value: boolean) => {
    dispatch(setIsAdmin(value));
  };

  const handleSetIsLoginModalOpen = (value: boolean) => {
    dispatch(setIsLoginModalOpen(value));
  };

  // if (isLoading) {
  //     return <DocklyLoader loading={isLoading} />;
  // }

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        isLoginModalOpen,
        config,
        setIsAdmin: handleSetIsAdmin,
        setIsLoginModalOpen: handleSetIsLoginModalOpen,
        updateConfig,
        saveConfigToServer,
        logout,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
