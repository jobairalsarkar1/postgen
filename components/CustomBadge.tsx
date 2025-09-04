interface BadgeProps {
  icon?: React.ElementType;
  text: string;
}

const CustomBadge = ({ icon: Icon, text }: BadgeProps) => {
  return (
    <div className="relative inline-flex items-center gap-2 px-5 py-2 mb-8 sm:mb-10 text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/30 rounded-lg animate-pulse shadow-[0_0_8px_2px_rgba(59,130,246,0.15)] dark:shadow-[0_0_12px_3px_rgba(59,130,246,0.2)] transition-transform hover:rotate-[0.5deg] backdrop-blur-sm">
      {Icon && (
        <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-spin-slow" />
      )}
      {text}
    </div>
  );
};

export default CustomBadge;
