'use client';
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { CloseCircleOutlined, HomeOutlined, MailOutlined, CreditCardOutlined } from '@ant-design/icons';
import { useSearchParams, useRouter } from 'next/navigation';
import { PRIMARY_COLOR } from '@/app/common';

const { Title, Text } = Typography;
const FAILURE_COLOR = '#ff4d4f';

const PaymentFailure: React.FC = () => {
    const [show, setShow] = useState(false);
    const [isFailure, setIsFailure] = useState<boolean | null>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    const email = searchParams?.get('email') ?? 'user@example.com';
    const plan = searchParams?.get('plan') ?? 'Basic Plan';
    const errorCode = searchParams?.get('error_code');
    const errorMessage = searchParams?.get('error_message') ?? 'Payment processing failed';

    useEffect(() => {
        // Simulate payment failure check
        setIsFailure(true);
    }, [errorCode, router]);

    useEffect(() => {
        if (isFailure) {
            const timer = setTimeout(() => setShow(true), 150);
            return () => clearTimeout(timer);
        }
    }, [isFailure]);

    const handleContactSupport = () => (window.location.href = 'mailto:support@dockly.me');
    const handleRetryPayment = () => (window.location.href = 'https://dockly.me/#pricing');

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Enhanced failure blast background effects */}
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${FAILURE_COLOR}40 0%, ${FAILURE_COLOR}25 60%, transparent 100%)`,
                    animation: show ? 'failureBlast 1.2s ease-out' : 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #ff7875a0 0%, #ff787520 60%, transparent 100%)`,
                    animation: show ? 'failureBlast2 1.0s ease-out 0.2s both' : 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #ffa39e30 0%, #ffa39e20 60%, transparent 100%)`,
                    animation: show ? 'failureBlast3 0.8s ease-out 0.4s both' : 'none',
                }}
            />

            {/* Error particles */}
            {show && (
                <>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: i % 5 === 0 ? '12px' : '8px',
                                height: i % 5 === 0 ? '12px' : '8px',
                                background: i % 6 === 0 ? FAILURE_COLOR :
                                    i % 6 === 1 ? '#ff7875' :
                                        i % 6 === 2 ? '#ffa39e' :
                                            i % 6 === 3 ? '#ffccc7' :
                                                i % 6 === 4 ? '#ff9c6e' : '#ffadd2',
                                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
                                animation: `confetti${i % 8} ${1.5 + (i % 3) * 0.5}s ease-out ${i * 0.05}s both`,
                            }}
                        />
                    ))}
                    {/* Additional error particles */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`burst-${i}`}
                            style={{
                                position: 'absolute',
                                width: '6px',
                                height: '6px',
                                background: i % 4 === 0 ? '#ff85c0' :
                                    i % 4 === 1 ? '#ff9980' :
                                        i % 4 === 2 ? '#ffb3ba' : '#ff6b9d',
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
                        ? '0 12px 40px rgba(255,77,79,0.12)'
                        : '0 0px 10px rgba(0,0,0,0.05)',
                    transform: show ? 'scale(1)' : 'scale(0.7)',
                    opacity: show ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    animation: show ? 'failurePop 0.8s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                }}
            >
                <CloseCircleOutlined
                    style={{
                        fontSize: '64px',
                        color: FAILURE_COLOR,
                        marginBottom: '16px',
                        animation: show ? 'iconFailure 1.0s ease-out 0.3s both' : 'none',
                    }}
                />
                <Title level={3} style={{ marginBottom: '4px', fontWeight: 700, color: '#262626' }}>
                    Payment Failed ❌
                </Title>
                <Text type="secondary" style={{ fontSize: '14px' }}>
                    We couldn't process your payment for the{' '}
                    <span style={{
                        background: `linear-gradient(135deg, ${FAILURE_COLOR} 0%, ${FAILURE_COLOR}dd 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700
                    }}>{plan}</span> plan.
                </Text>

                <div
                    style={{
                        marginTop: '20px',
                        borderRadius: '10px',
                        background: '#fff2f0',
                        border: '1px solid #ffccc7',
                        padding: '10px 14px',
                        textAlign: 'left',
                    }}
                >
                    <Text style={{ display: 'block', marginBottom: '4px' }}>
                        <b>Email:</b> {email}
                    </Text>
                    <Text style={{ display: 'block', marginBottom: '4px' }}>
                        <b>Status:</b>{' '}
                        <Text style={{ fontWeight: 500, color: FAILURE_COLOR }}>
                            Failed ⚠️
                        </Text>
                    </Text>
                    <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>
                        <b>Error:</b> {errorMessage}
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
                        icon={<CreditCardOutlined />}
                        onClick={handleRetryPayment}
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
                        Try Again
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

                {/* <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <Button
                        type="link"
                        icon={<HomeOutlined />}
                        onClick={() => window.location.href = 'https://dockly.me'}
                        style={{
                            color: '#8c8c8c',
                            fontSize: '13px',
                            padding: '0',
                            height: 'auto',
                        }}
                    >
                        Back to Home
                    </Button>
                </div> */}
            </Card>

            <style>{`
                @keyframes failurePop {
                    0% { transform: scale(0.5) rotate(-5deg); opacity: 0; }
                    50% { transform: scale(1.1) rotate(2deg); opacity: 1; }
                    70% { transform: scale(0.95) rotate(-1deg); }
                    100% { transform: scale(1) rotate(0deg); }
                }

                @keyframes iconFailure {
                    0% { transform: scale(0) rotate(0deg); opacity: 0; }
                    50% { transform: scale(1.4) rotate(-180deg); opacity: 1; }
                    70% { transform: scale(1.2) rotate(-360deg); }
                    100% { transform: scale(1) rotate(-360deg); }
                }

                @keyframes failureBlast {
                    0% { transform: scale(0); opacity: 0.8; }
                    50% { transform: scale(2); opacity: 0.4; }
                    100% { transform: scale(4); opacity: 0; }
                }

                @keyframes failureBlast2 {
                    0% { transform: scale(0); opacity: 0.6; }
                    60% { transform: scale(3); opacity: 0.3; }
                    100% { transform: scale(5); opacity: 0; }
                }

                @keyframes failureBlast3 {
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

export default PaymentFailure;