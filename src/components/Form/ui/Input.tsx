import { cn } from "../../../utils/cn"

interface InputProps {
  name: string
  placeholder: string
  value: string
  type: 'text' | 'email'
  error?: string
  as?: 'input' | 'textarea'
  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export function Input({name,
  placeholder,
  value,
  type,
  error,
  as,
  onChange}: InputProps) {
  
  const inputStyle = cn(
    'w-full h-14 rounded-[20px] placeholder-black px-[21px] text-black bg-white text-[20px] outline-none',
    error && 'border border-red-500'
  )

  const textareaStyle = cn(
    'w-full h-52 resize-none rounded-[20px] placeholder-black p-[21px] text-black bg-white text-[20px] outline-none',
    error && 'border border-red-500'
  )
  
  return (
    <>
      {
        as === 'textarea' ? (
          <textarea
            className={textareaStyle}
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Mensagem"
          />
        ) : (
          <input
            className={inputStyle}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )
      }
      {!!error && (
        <span className="text-red-500 text-sm pt-2 pl-4 block">{error}</span>
      )}
    </>
  )
}