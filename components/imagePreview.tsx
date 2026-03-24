import React from 'react';
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagePreviewProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    titles: string[];
    initialIndex?: number;
}

export default function ImagePreview({
    isOpen,
    onClose,
    images = [],
    titles = [],
    initialIndex = 0
}: ImagePreviewProps) {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    React.useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
            if (e.key === "ArrowLeft") {
                handlePreviousImage();
            }
            if (e.key === "ArrowRight") {
                handleNextImage();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleNextImage = () => {
        if (images.length > 1) {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }
    };

    const handlePreviousImage = () => {
        if (images.length > 1) {
            setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
        }
    };

    const handleDownload = async () => {
        const currentImage = images[currentIndex];
        const currentTitle = titles[currentIndex] || `Image ${currentIndex + 1}`;

        try {
            const response = await fetch(currentImage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${currentTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Failed to download image:', error);
            // Fallback method
            const link = document.createElement('a');
            link.href = currentImage;
            link.download = `${currentTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];
    const currentTitle = titles[currentIndex] || `Image ${currentIndex + 1}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black/96 backdrop-blur-xl"
                    onClick={onClose}
                >
                    {/* Close Button - Added as requested */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        onClick={onClose}
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-105 border border-white/20"
                        title="Close (ESC)"
                    >
                        <X className="w-5 sm:w-6 h-5 sm:h-6" />
                    </motion.button>

                    {/* Download Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                        onClick={(e) => { e.stopPropagation(); handleDownload(); }}
                        className="absolute top-4 sm:top-6 right-16 sm:right-20 z-30 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-105 border border-white/20"
                        title="Download Image"
                    >
                        <Download className="w-5 sm:w-6 h-5 sm:h-6" />
                    </motion.button>

                    {/* Navigation Controls */}
                    {images.length > 1 && (
                        <>
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={(e) => { e.stopPropagation(); handlePreviousImage(); }}
                                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-105 border border-white/20"
                                title="Previous Image (←)"
                            >
                                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-200 hover:scale-105 border border-white/20"
                                title="Next Image (→)"
                            >
                                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                            </motion.button>
                        </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm sm:text-base border border-white/20"
                        >
                            <span className="font-mono text-xs sm:text-sm">{currentIndex + 1} / {images.length}</span>
                        </motion.div>
                    )}

                    {/* Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 px-4 sm:px-6 py-3 sm:py-4 bg-black/60 backdrop-blur-md rounded-xl text-white border border-white/20 max-w-xs sm:max-w-md"
                    >
                        <h3 className="text-base sm:text-lg font-semibold mb-1">{currentTitle}</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            {images.length > 1 ? 'Use arrow keys or buttons to navigate' : 'Click outside to close'}
                        </p>
                    </motion.div>

                    {/* Image Thumbnails (for multiple images) */}
                    {images.length > 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 max-w-[90vw] overflow-x-auto"
                        >
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                                    className={`flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                        ? 'border-white shadow-lg scale-110'
                                        : 'border-white/30 hover:border-white/60 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* Main Image */}
                    <div className="flex items-center justify-center h-full p-6 sm:p-8 pt-16 sm:pt-20 pb-28 sm:pb-32">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`${currentIndex}-${currentImage}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                src={currentImage}
                                alt={currentTitle}
                                style={{
                                    maxWidth: '85vw',
                                    maxHeight: '60vh',
                                    objectFit: 'contain',
                                    borderRadius: '12px',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
                                    transition: 'transform 0.3s ease',
                                }}
                                className="sm:max-w-[80vw] sm:max-h-[70vh]"
                                onClick={(e) => e.stopPropagation()}
                                onLoad={() => console.log('Image loaded successfully')}
                                onError={() => console.error('Failed to load image')}
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}