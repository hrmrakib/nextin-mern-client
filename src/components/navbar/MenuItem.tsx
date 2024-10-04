// "use client";

interface menuItemProps  {
    onClick: () => void;
    label: string
}

const MenuItem:React.FC<menuItemProps> = ({onClick, label}) => {
  return (
    <div onClick={onClick} className="font-semibold transition hover:bg-neutral-100 px-4 py-3">
        {label}
    </div>
  )
}

export default MenuItem