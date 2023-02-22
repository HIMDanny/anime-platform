type StatusBadgeProps = {
  status: 'current' | 'finished' | 'tba' | 'unreleased' | 'upcoming';
} & React.HTMLProps<HTMLSpanElement>;

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const statusColor =
    status === 'current'
      ? 'bg-blue-900 text-blue-300'
      : status === 'finished'
      ? 'bg-green-900 text-green-300'
      : status === 'tba'
      ? 'bg-pink-900 text-pink-300'
      : status === 'unreleased'
      ? 'bg-purple-900 text-purple-300'
      : status === 'upcoming'
      ? 'bg-yellow-900 text-yellow-300'
      : '';

  return (
    <span
      className={`rounded px-2.5 py-0.5 font-medium ${statusColor} ${className}`}
    >
      {status === 'current' ? 'opening' : status}
    </span>
  );
};
export default StatusBadge;
