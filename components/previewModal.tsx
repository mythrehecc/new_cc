import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Star, Zap, Shield, Clock, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import ImagePreview from "./imagePreview";

interface PreviewData {
    title: string;
    subtitle: string;
    description: string;
    images: string[]; // Changed from single image to array of images
    gradient: string;
    textColor: string;
    features?: string[] | Array<{ icon: string; text: string }>;
    badges?: string[];
}

interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: PreviewData | null;
}

export default function PreviewModal({
    isOpen,
    onClose,
    data,
}: PreviewModalProps) {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [imagePreviewIndex, setImagePreviewIndex] = useState(0);

    // Auto-rotation effect
    useEffect(() => {
        if (!isOpen || !data?.images?.length || !isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) =>
                (prev + 1) % data.images.length
            );
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [isOpen, data?.images?.length, isAutoPlaying]);

    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
            if (e.key === "ArrowLeft") {
                handlePrevImage();
            }
            if (e.key === "ArrowRight") {
                handleNextImage();
            }
            if (e.key === " ") {
                e.preventDefault();
                setIsAutoPlaying(prev => !prev);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!data) return null;

    const handleImageClick = (index?: number) => {
        if (data.images && data.images.length > 0) {
            setImagePreviewIndex(index ?? currentImageIndex);
            setIsImageModalOpen(true);
        }
    };

    const handleImageModalClose = () => {
        setIsImageModalOpen(false);
    };

    const handleModalBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleNextImage = () => {
        if (data.images && data.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
        }
    };

    const handlePrevImage = () => {
        if (data.images && data.images.length > 0) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? data.images.length - 1 : prev - 1
            );
        }
    };

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    const getFeatureIcon = (index: number) => {
        const icons = [Star, Zap, Shield, Clock];
        const Icon = icons[index % icons.length];
        return <Icon className="w-3.5 h-3.5" />;
    };

    // Calculate modal width based on content
    const hasImages = data.images && data.images.length > 0;
    const hasFeatures = data.features && data.features.length > 0;
    const hasBadges = data.badges && data.badges.length > 0;

    // Determine layout and width - Enhanced for mobile
    const shouldUseHorizontalLayout = hasImages && (window.innerWidth >= 1024);
    const modalWidth = "max-w-7xl"; // Larger for desktop

    return (
        <>
            {/* Main Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6"
                        style={{
                            background: "radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, rgba(0, 0, 0, 0.9) 100%)",
                            backdropFilter: "blur(20px)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleModalBackdropClick}
                    >
                        <motion.div
                            className={`relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full ${modalWidth} max-h-[95vh] sm:max-h-[90vh]`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-tr from-pink-400/10 to-orange-600/10 rounded-full blur-3xl"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 sm:w-60 h-30 sm:h-60 bg-gradient-to-br from-indigo-400/5 to-cyan-600/5 rounded-full blur-3xl"></div>
                            </div>

                            {/* Header Controls */}
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 flex gap-2">
                                {/* View Image Button */}
                                {hasImages && (
                                    <motion.button
                                        onClick={() => handleImageClick()}
                                        className="group relative w-10 sm:w-9 h-10 sm:h-9 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 transition-all duration-200"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Eye className="w-4 sm:w-4 h-4 sm:h-4 text-gray-700 group-hover:text-gray-900 transition-colors" />
                                    </motion.button>
                                )}

                                {/* Close Button */}
                                <motion.button
                                    onClick={onClose}
                                    className="group relative w-10 sm:w-9 h-10 sm:h-9 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 transition-all duration-200"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        background: "linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(239, 68, 68, 0.1))"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="w-4 sm:w-4 h-4 sm:h-4 text-gray-700 group-hover:text-red-600 transition-colors" />
                                </motion.button>
                            </div>

                            {/* Content Container */}
                            <div className={`flex h-full ${shouldUseHorizontalLayout ? 'flex-row' : 'flex-col'} overflow-hidden`}>
                                {/* Enhanced Image Carousel Section */}
                                {hasImages && (
                                    <div className={`relative ${shouldUseHorizontalLayout ? 'w-3/5' : 'w-full h-48 sm:h-64 lg:h-80'} flex items-center justify-center p-3 sm:p-4`}>
                                        <motion.div
                                            className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg group"
                                            style={{
                                                background: `linear-gradient(135deg, ${data.gradient || '#667eea 0%, #764ba2 100%'})`,
                                            }}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            {/* Enhanced Carousel Container */}
                                            <div className="relative w-full h-full overflow-hidden cursor-pointer p-4 sm:p-6" onClick={() => handleImageClick()}>
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentImageIndex}
                                                        className="relative w-full h-full flex items-center justify-center"
                                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                                    >
                                                        {/* Image Container with Shadow Frame */}
                                                        <div className="relative max-w-full max-h-full">
                                                            <div className="relative bg-white rounded-lg shadow-2xl p-2 sm:p-3">
                                                                <img
                                                                    src={data.images[currentImageIndex]}
                                                                    alt={`${data.title} Preview ${currentImageIndex + 1}`}
                                                                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-md"
                                                                    draggable={false}
                                                                    style={{
                                                                        filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))"
                                                                    }}
                                                                />

                                                                {/* Subtle reflection effect */}
                                                                <div className="absolute -bottom-1 left-2 right-2 h-4 sm:h-6 bg-gradient-to-b from-white/20 to-transparent rounded-b-md blur-sm"></div>
                                                            </div>

                                                            {/* Floating glow effect */}
                                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10 scale-110"></div>
                                                        </div>
                                                    </motion.div>
                                                </AnimatePresence>

                                                {/* Enhanced Hover Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                                                    <div className="text-white flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium border border-white/20">
                                                        <Eye className="w-4 sm:w-5 h-4 sm:h-5" />
                                                        <span className="hidden sm:inline">View Gallery</span>
                                                        <span className="sm:hidden">View</span>
                                                    </div>
                                                </div>

                                                {/* Enhanced Navigation Arrows */}
                                                {data.images.length > 1 && (
                                                    <>
                                                        <motion.button
                                                            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
                                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                                                        </motion.button>
                                                        <motion.button
                                                            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
                                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                                                        </motion.button>
                                                    </>
                                                )}

                                                {/* Enhanced Play/Pause Button */}
                                                {data.images.length > 1 && (
                                                    <motion.button
                                                        onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(!isAutoPlaying); }}
                                                        className="absolute top-2 sm:top-4 left-2 sm:left-4 w-10 sm:w-12 h-10 sm:h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
                                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        {isAutoPlaying ?
                                                            <Pause className="w-4 sm:w-5 h-4 sm:h-5" /> :
                                                            <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-0.5" />
                                                        }
                                                    </motion.button>
                                                )}
                                            </div>

                                            {/* Enhanced Carousel Indicators */}
                                            {data.images.length > 1 && (
                                                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
                                                    {data.images.map((_, index) => (
                                                        <motion.button
                                                            key={index}
                                                            onClick={(e) => { e.stopPropagation(); handleDotClick(index); }}
                                                            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 border ${index === currentImageIndex
                                                                ? 'bg-white shadow-lg scale-125 border-white/50'
                                                                : 'bg-white/40 hover:bg-white/70 border-white/30'
                                                                }`}
                                                            whileHover={{ scale: index === currentImageIndex ? 1.25 : 1.3 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Enhanced Image Counter */}
                                            {data.images.length > 1 && (
                                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/30 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                                                    {currentImageIndex + 1} / {data.images.length}
                                                </div>
                                            )}

                                            {/* Enhanced Auto-play Progress Bar */}
                                            {isAutoPlaying && data.images.length > 1 && (
                                                <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-black/10">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-sm"
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "100%" }}
                                                        transition={{
                                                            duration: 4,
                                                            ease: "linear",
                                                            repeat: Infinity
                                                        }}
                                                        key={currentImageIndex}
                                                    />
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                )}

                                {/* Content Section */}
                                <div className={`relative ${shouldUseHorizontalLayout ? 'w-2/5' : 'w-full'} bg-white flex flex-col overflow-y-auto`}>
                                    <motion.div
                                        className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6"
                                        initial={{ opacity: 0, x: shouldUseHorizontalLayout ? 20 : 0, y: shouldUseHorizontalLayout ? 0 : 20 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        {/* Header */}
                                        <div className="space-y-2">
                                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                                {data.title}
                                            </h2>
                                            <p
                                                className="text-xs sm:text-sm font-medium"
                                                style={{ color: data.textColor || "#6b7280" }}
                                            >
                                                {data.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                {data.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        {hasFeatures && (
                                            <div className="space-y-3">
                                                <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                                                    Key Features
                                                </h3>
                                                <div className="space-y-2">
                                                    {data.features!.map((feature, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-blue-50 hover:to-purple-50 border border-gray-100 hover:border-blue-200 transition-all duration-200"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                                            whileHover={{ scale: 1.02 }}
                                                        >
                                                            <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                                                                {getFeatureIcon(index)}
                                                            </div>
                                                            <span className="text-xs sm:text-sm text-gray-700 font-medium">
                                                                {typeof feature === "string" ? feature : feature.text}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Badges */}
                                        {hasBadges && (
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {data.badges!.map((badge, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full shadow-sm"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay: 0.4 + index * 0.05,
                                                        }}
                                                    >
                                                        {badge}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Enhanced Thumbnail Row (for multiple images) */}
                                        {hasImages && data.images.length > 1 && (
                                            <div className="space-y-3">
                                                <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                                                    Gallery ({data.images.length} images)
                                                </h3>
                                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                                    {data.images.map((image, index) => (
                                                        <motion.button
                                                            key={index}
                                                            onClick={() => handleImageClick(index)}
                                                            className={`relative flex-shrink-0 w-14 sm:w-18 h-14 sm:h-18 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                                                                ? 'border-blue-500 shadow-lg scale-105 ring-2 ring-blue-200'
                                                                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                                                }`}
                                                            whileHover={{ scale: index === currentImageIndex ? 1.05 : 1.08 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <div className="w-full h-full bg-white p-1">
                                                                <img
                                                                    src={image}
                                                                    alt={`Thumbnail ${index + 1}`}
                                                                    className="w-full h-full object-contain rounded"
                                                                    draggable={false}
                                                                />
                                                            </div>
                                                            {index === currentImageIndex && (
                                                                <div className="absolute inset-0 bg-blue-500/15 flex items-center justify-center">
                                                                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-blue-500 rounded-full shadow-lg"></div>
                                                                </div>
                                                            )}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Image Preview Modal */}
            <ImagePreview
                isOpen={isImageModalOpen}
                onClose={handleImageModalClose}
                images={data?.images ?? []}
                titles={data?.images?.map((_, index) => `${data.title} - Image ${index + 1}`) ?? []}
                initialIndex={imagePreviewIndex}
            />
        </>
    );
}