'use client';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
const { Text } = Typography;
export const PRIMARY_COLOR = '#6366F1';
export const DEFAULT_TEXT_COLOR = '#343434';

export function usePageTitle(pageName: string) {
  useEffect(() => {
    if (pageName) {
      document.title = `${pageName} | Crestcode`;
    } else {
      document.title = 'Crestcode';
    }
  }, [pageName]);
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}
interface DocklyLogoProps {
  collapsed?: boolean;
  color?: string;
  size?: number;
  title?: string;
  marginLeftCollapsed?: string;
  marginLeftExpanded?: string;
  marginTop?: string;
  textStyle?: React.CSSProperties;
}

export const DocklyLogo: React.FC<DocklyLogoProps> = ({
  collapsed = false,
  color = PRIMARY_COLOR,
  size = 40,
  title = 'Dockly',
  marginLeftCollapsed = '-8px',
  marginLeftExpanded = '-50px',
  marginTop = 15,
  textStyle = {},
}) => {
  return (
    <div
      style={{
        marginLeft: collapsed ? marginLeftCollapsed : marginLeftExpanded,
        marginTop: marginTop,
        display: 'flex',
        alignItems: 'center',
        marginRight: '-8px',
      }}>
      {/* SVG Logo */}
      <div
        style={{
          width: size,
          height: size,
          marginTop: -5,
        }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 128 128"
            aria-hidden="true">
            {/* Background circle */}
            <circle cx="64" cy="64" r="64" fill="#E0E7FF" />

            {/* Logo lines - scaled to 90% and centered */}
            <g fill={color} transform="translate(6.4, 6.4) scale(0.9)">
              <rect x="34" y="28" width="60" height="16" rx="8" />
              <rect x="26" y="56" width="76" height="16" rx="8" />
              <rect x="18" y="84" width="92" height="16" rx="8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Text */}
      {!collapsed && (
        <Text
          style={{
            color: DEFAULT_TEXT_COLOR,
            marginTop: '-7px',
            marginLeft: 8,
            fontSize: 22, // 🔥 dynamic font size based on logo size
            fontWeight: 700,
            letterSpacing: '0.5px',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            ...textStyle,
          }}>
          {title}
        </Text>
      )}
    </div>
  );
};

export const FINANCE_BOARD_COLOR = '#3b82f6';
export const HOME_BOARD_COLOR = '#10b981';
export const HEALTH_BOARD_COLOR = '#ef4444';
export const FAMILY_BOARD_COLOR = '#ec4899';
export const NOTES_HUB_COLOR = '#e6a609';
export const ACCOUNTS_HUB_COLOR = '#3E4C59';
export const PLANNER_HUB_COLOR = PRIMARY_COLOR;
export const FILES_HUB_COLOR = '#60a5fa';
