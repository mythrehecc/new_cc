'use client';
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, Space, Spin } from 'antd';
import { CheckCircleOutlined, HomeOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useSearchParams, useRouter } from 'next/navigation';
import { DocklyLogo, PRIMARY_COLOR } from '@/app/common';

const { Title, Text } = Typography;
const PaymentSuccess: React.FC = () => {
    const [show, setShow] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    const email = searchParams?.get('email') ?? 'user@example.com';
    const plan = searchParams?.get('plan') ?? 'Basic Plan';
    const accessCode = searchParams?.get('access_code');

    useEffect(() => {
        if (accessCode) {
            setIsSubscribed(true);
        } else if (!accessCode) {
            setIsSubscribed(false);
        }
    }, [accessCode, router]);

    useEffect(() => {
        if (isSubscribed) {
            const timer = setTimeout(() => setShow(true), 150);
            return () => clearTimeout(timer);
        }
    }, [isSubscribed]);

    const handleContactSupport = () => (window.location.href = 'mailto:support@dockly.me');

    // Access blocked for non-subscribers
    if (!isSubscribed) {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f5f9ff 0%, #e6f0ff 100%)',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
            >
                <Card
                    style={{
                        width: '320px',
                        borderRadius: '12px',
                        border: 'none',
                        textAlign: 'center',
                        padding: '24px 16px',
                        background: 'white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                >
                    <LockOutlined
                        style={{
                            fontSize: '42px',
                            color: '#ff4d4f',
                            marginBottom: '12px',
                        }}
                    />
                    <Title level={4} style={{ marginBottom: '8px', fontWeight: 600, color: '#262626' }}>
                        Access Restricted
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px', display: 'block', marginBottom: '16px' }}>
                        This page is only available for subscribed users.
                    </Text>
                    <Space style={{ width: '100%', justifyContent: 'center' }}>
                        <Button
                            type="primary"
                            onClick={() => window.location.href = 'https://dockly.me/#pricing'}
                            style={{
                                borderRadius: '6px',
                                fontWeight: 600,
                                height: '36px',
                                padding: '0 16px',
                                background: PRIMARY_COLOR,
                                border: 'none',
                                fontSize: '13px',
                            }}
                        >
                            Subscribe Now
                        </Button>
                        <Button
                            onClick={() => window.location.href = 'https://dockly.me'}
                            style={{
                                borderRadius: '6px',
                                height: '36px',
                                padding: '0 16px',
                                fontWeight: 600,
                                border: '1px solid #d9d9d9',
                                fontSize: '13px',
                            }}
                        >
                            Go Back
                        </Button>
                    </Space>
                </Card>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f5f9ff 0%, #e6f0ff 100%)',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Enhanced birthday blast background effects */}
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${PRIMARY_COLOR}40 0%, ${PRIMARY_COLOR}25 60%, transparent 100%)`,
                    animation: show ? 'birthdayBlast 1.2s ease-out' : 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #52c41a35 0%, #52c41a20 60%, transparent 100%)`,
                    animation: show ? 'birthdayBlast2 1.0s ease-out 0.2s both' : 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #faad1430 0%, #faad1420 60%, transparent 100%)`,
                    animation: show ? 'birthdayBlast3 0.8s ease-out 0.4s both' : 'none',
                }}
            />

            {/* Confetti particles */}
            {show && (
                <>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: i % 5 === 0 ? '12px' : '8px',
                                height: i % 5 === 0 ? '12px' : '8px',
                                background: i % 6 === 0 ? PRIMARY_COLOR :
                                    i % 6 === 1 ? '#52c41a' :
                                        i % 6 === 2 ? '#faad14' :
                                            i % 6 === 3 ? '#ff4d4f' :
                                                i % 6 === 4 ? '#722ed1' : '#13c2c2',
                                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
                                animation: `confetti${i % 8} ${1.5 + (i % 3) * 0.5}s ease-out ${i * 0.05}s both`,
                            }}
                        />
                    ))}
                    {/* Additional burst particles */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`burst-${i}`}
                            style={{
                                position: 'absolute',
                                width: '6px',
                                height: '6px',
                                background: i % 4 === 0 ? '#ff69b4' :
                                    i % 4 === 1 ? '#00d4aa' :
                                        i % 4 === 2 ? '#ffa940' : '#9254de',
                                borderRadius: '50%',
                                animation: `burstParticle${i % 6} 2.2s ease-out ${i * 0.08}s both`,
                            }}
                        />
                    ))}
                </>
            )}

            <Card
                style={{
                    width: '380px',
                    borderRadius: '16px',
                    border: 'none',
                    textAlign: 'center',
                    padding: '32px 20px',
                    background: 'white',
                    boxShadow: show
                        ? '0 12px 40px rgba(0,0,0,0.12)'
                        : '0 0px 10px rgba(0,0,0,0.05)',
                    transform: show ? 'scale(1)' : 'scale(0.7)',
                    opacity: show ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    animation: show ? 'celebrationPop 0.8s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                }}
            >
                <CheckCircleOutlined
                    style={{
                        fontSize: '64px',
                        color: '#52c41a',
                        marginBottom: '16px',
                        animation: show ? 'iconCelebration 1.0s ease-out 0.3s both' : 'none',
                    }}
                />
                <Title level={3} style={{ marginBottom: '4px', fontWeight: 700 }}>
                    Payment Successful! 🎉
                </Title>
                <Text type="secondary" style={{ fontSize: '14px' }}>
                    Your <span style={{
                        background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_COLOR}dd 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700
                    }}>{plan}</span> plan has been activated.
                </Text>

                <div
                    style={{
                        marginTop: '20px',
                        borderRadius: '10px',
                        background: '#fafafa',
                        border: '1px solid #f0f0f0',
                        padding: '10px 14px',
                        textAlign: 'left',
                    }}
                >
                    <Text style={{ display: 'block', marginBottom: '4px' }}>
                        <b>Email:</b> {email}
                    </Text>
                    <Text>
                        <b>Status:</b>{' '}
                        <Text type="success" style={{ fontWeight: 500 }}>
                            Active ✨
                        </Text>
                    </Text>
                </div>

                <Space
                    style={{
                        marginTop: '24px',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        type="primary"
                        icon={<DocklyLogo title="" size={26} marginLeftExpanded='0' marginLeftCollapsed='0' marginTop='5px' />}
                        onClick={() => window.location.href = 'https://app.dockly.me'}
                        style={{
                            borderRadius: '6px',
                            fontWeight: 600,
                            height: '40px',
                            padding: '0 18px',
                            background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_COLOR}dd 100%)`,
                            border: 'none',
                            boxShadow: `0 4px 12px ${PRIMARY_COLOR}40`,
                        }}
                    >
                        Go to Dockly App
                    </Button>
                    <Button
                        icon={<MailOutlined />}
                        onClick={handleContactSupport}
                        style={{
                            borderRadius: '6px',
                            height: '40px',
                            padding: '0 18px',
                            fontWeight: 600,
                            border: '1px solid #d9d9d9',
                        }}
                    >
                        Support
                    </Button>
                </Space>
            </Card>

            <style>{`
                @keyframes celebrationPop {
                    0% { transform: scale(0.5) rotate(-5deg); opacity: 0; }
                    50% { transform: scale(1.1) rotate(2deg); opacity: 1; }
                    70% { transform: scale(0.95) rotate(-1deg); }
                    100% { transform: scale(1) rotate(0deg); }
                }

                @keyframes iconCelebration {
                    0% { transform: scale(0) rotate(0deg); opacity: 0; }
                    50% { transform: scale(1.4) rotate(180deg); opacity: 1; }
                    70% { transform: scale(1.2) rotate(360deg); }
                    100% { transform: scale(1) rotate(360deg); }
                }

                @keyframes birthdayBlast {
                    0% { transform: scale(0); opacity: 0.8; }
                    50% { transform: scale(2); opacity: 0.4; }
                    100% { transform: scale(4); opacity: 0; }
                }

                @keyframes birthdayBlast2 {
                    0% { transform: scale(0); opacity: 0.6; }
                    60% { transform: scale(3); opacity: 0.3; }
                    100% { transform: scale(5); opacity: 0; }
                }

                @keyframes birthdayBlast3 {
                    0% { transform: scale(0); opacity: 0.5; }
                    70% { transform: scale(4); opacity: 0.2; }
                    100% { transform: scale(6); opacity: 0; }
                }

                @keyframes confetti0 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-200px) translateX(100px) rotate(720deg); opacity: 0; }
                }

                @keyframes confetti1 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-180px) translateX(-80px) rotate(-720deg); opacity: 0; }
                }

                @keyframes confetti2 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-220px) translateX(60px) rotate(540deg); opacity: 0; }
                }

                @keyframes confetti3 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-160px) translateX(-120px) rotate(-540deg); opacity: 0; }
                }

                @keyframes confetti4 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-240px) translateX(140px) rotate(900deg); opacity: 0; }
                }

                @keyframes confetti5 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-190px) translateX(-160px) rotate(-810deg); opacity: 0; }
                }

                @keyframes confetti6 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-280px) translateX(80px) rotate(1080deg); opacity: 0; }
                }

                @keyframes confetti7 {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-150px) translateX(-200px) rotate(-630deg); opacity: 0; }
                }

                @keyframes burstParticle0 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    20% { transform: translateY(-20px) translateX(30px) scale(1.2) rotate(180deg); opacity: 1; }
                    100% { transform: translateY(-180px) translateX(120px) scale(0.3) rotate(720deg); opacity: 0; }
                }

                @keyframes burstParticle1 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    20% { transform: translateY(-30px) translateX(-40px) scale(1.3) rotate(-180deg); opacity: 1; }
                    100% { transform: translateY(-200px) translateX(-140px) scale(0.2) rotate(-900deg); opacity: 0; }
                }

                @keyframes burstParticle2 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    25% { transform: translateY(-15px) translateX(50px) scale(1.4) rotate(270deg); opacity: 1; }
                    100% { transform: translateY(-160px) translateX(180px) scale(0.4) rotate(1080deg); opacity: 0; }
                }

                @keyframes burstParticle3 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    30% { transform: translateY(-25px) translateX(-60px) scale(1.1) rotate(-270deg); opacity: 1; }
                    100% { transform: translateY(-220px) translateX(-160px) scale(0.5) rotate(-810deg); opacity: 0; }
                }

                @keyframes burstParticle4 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    15% { transform: translateY(-40px) translateX(20px) scale(1.5) rotate(360deg); opacity: 1; }
                    100% { transform: translateY(-250px) translateX(100px) scale(0.1) rotate(1440deg); opacity: 0; }
                }

                @keyframes burstParticle5 {
                    0% { transform: translateY(0) translateX(0) scale(0) rotate(0deg); opacity: 1; }
                    35% { transform: translateY(-10px) translateX(-80px) scale(1.2) rotate(-360deg); opacity: 1; }
                    100% { transform: translateY(-170px) translateX(-200px) scale(0.3) rotate(-1260deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default PaymentSuccess;