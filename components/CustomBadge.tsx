interface BadgeProps {
  icon?: React.ElementType;
  text: string;
}

const CustomBadge = ({ icon: Icon, text }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-blue-400 mb-6 border border-blue-200 dark:border-blue-400/20">
      {Icon && (
        <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400 font-bold" />
      )}
      {text}
    </div>
  );
};

export default CustomBadge;
