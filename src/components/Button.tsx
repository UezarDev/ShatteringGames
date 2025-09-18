function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className="py-4 px-8 rounded-lg bg-transparent hover:bg-zinc-900/25 shadow-initial border-1 border-transparent duration-200 hover:shadow-lg hover:border-white/10 active:bg-zinc-900/50 transition-all"
      onClick={onClick}
      style={{}}
    >
      {label}
    </button>
  )
}

export default Button
