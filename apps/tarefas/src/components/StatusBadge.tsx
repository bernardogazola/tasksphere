import { STATUS_COLORS } from '@tasksphere/shared'
import type { Status } from '@tasksphere/shared'

interface Props {
  status: Status
}

export default function StatusBadge({ status }: Props) {
  const colors = STATUS_COLORS[status]
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
      {status}
    </span>
  )
}
