import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, Send, CheckCircle2, MessageSquareHeart, Sparkles, AlertCircle } from 'lucide-react';
import { feedbackService } from '../../services/apiServices';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [category, setCategory] = useState<string>('General');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'General',
    'Bug Report',
    'Feature Request',
    'Hospital Services',
    'AI Accuracy',
    'Emergency 108',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await feedbackService.submitFeedback({
        name,
        email,
        category,
        rating,
        message,
        userId: user?.id,
      });

      setIsSuccess(true);
      toast.success('Thank you! Your feedback has been sent to our medical officers.');
      setTimeout(() => {
        setIsSuccess(false);
        setMessage('');
        onClose();
      }, 2500);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
          >
            {/* Header Accent Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
              aria-label="Close feedback modal"
            >
              <X size={18} />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Feedback Received!</h3>
                <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                  Thank you for helping us improve Odisha's AI public health system. A confirmation receipt has been sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                    <MessageSquareHeart size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Citizen Feedback & Inquiries</h3>
                    <p className="text-xs text-slate-400">Direct line to Odisha Public Health Administration</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    How was your experience?
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = (hoverRating !== null ? hoverRating : rating) >= star;
                      return (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => setRating(star)}
                          className="p-1.5 rounded-lg hover:scale-110 transition-transform focus:outline-none"
                        >
                          <Star
                            size={26}
                            className={isFilled ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}
                          />
                        </button>
                      );
                    })}
                    <span className="ml-2 text-xs font-bold text-amber-400">
                      {rating === 5 ? '⭐⭐⭐⭐⭐ Excellent' : rating === 4 ? '⭐⭐⭐⭐ Good' : rating === 3 ? '⭐⭐⭐ Average' : rating === 2 ? '⭐⭐ Poor' : '⭐ Terrible'}
                    </span>
                  </div>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Feedback Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-slate-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Mohapatra"
                      required
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Feedback / Suggestion / Query *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you liked or how we can improve healthcare services in Odisha..."
                    required
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-teal-500 placeholder:text-slate-500 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:opacity-90 disabled:opacity-50 transition flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      'Dispatching to Officers...'
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Feedback</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;
