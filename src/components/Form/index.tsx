import { useState } from "react";
import { Input } from "./ui/Input";
import { formatPhoneNumber } from "../../utils/format";

import { z } from 'zod';
import { sendEmail } from "./utils/sendEmail";
import { toast } from "react-hot-toast";

import { ReloadIcon } from '@radix-ui/react-icons'
import { cn } from "../../utils/cn";

import formCar from '../../assets/images/carro-form.png'
import { useFormContext } from "./context/useFormContext";

const schema = z.object({
  name: z.string().min(7, { message: 'Digite seu nome completo' }),
  phone: z.string().min(10, { message: 'Digite seu telefone' }),
  email: z.string().email({ message: 'Digite seu e-mail corretamente' }),
  companyName: z.string().min(7, { message: 'Digite o nome da sua empresa' }),
  message: z.string().min(5, { message: 'Digite sua mensagem' }),
});

export type FormData = z.infer<typeof schema>;

export function Form() {
  const [fields, setFields] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target

    if (name === 'phone') {
      setFields((prevState) => ({
        ...prevState,
        phone: formatPhoneNumber(value)
      }))

      return;
    }

    setFields((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = schema.safeParse(fields);

    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};

      result.error.errors.forEach(error => {
        newErrors[error.path[0] as keyof FormData] = error.message;
      });

      setErrors(newErrors);

      return false
    }

    try {
      setLoading(true)
      await sendEmail(fields);
      toast.success('Formulário enviado com sucesso!');
      setErrors({});
      setFields({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        message: ''
      })
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o formulário.');
    } finally {
      setLoading(false)
    }
  };


  const buttonStyle = cn(
    'bg-green text-white font-bold w-full xl:w-52 h-14 rounded-[20px] hover:bg-lime-900 transition-colors',
    loading && 'flex items-center justify-center bg-gray-500 pointer-events-none text-black'
  )

  const { formRef } = useFormContext();

  return (
    <div className="max-w-full xl:max-w-[1440px] mx-auto bg-black px-4 py-14" ref={formRef}>
      <div className="w-full text-white">
        <h2 className="text-center xl:text-left text-[32px] xl:text-5xl font-bold leading-[72px]">Fale conosco</h2>
        <p className="text-center xl:text-left text-sm xl:text-2xl mt-3 xl:leading-9">
          Quer revolucionar as vendas na sua Concessionária?<br />
          Nós sabemos como. Entre em contato e descubra como podemos te ajudar.
        </p>
        <a className="text-center xl:text-left text-lg xl:text-2xl mt-4 xl:mt-14 leading-9 block" href="mailto:contato@chavenocontato.com">
          <strong>contato@chavenocontato.com</strong>
        </a>

        <div className="flex items-center my-6 text-lg justify-center xl:justify-start">
          <div className="w-16 h-[1px] bg-white"></div>
          <p className="px-[91px]">ou</p>
          <div className="w-16 h-[1px] bg-white"></div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:max-w-[358px]">
              <Input
                name="name"
                type="text"
                value={fields.name}
                onChange={handleChange}
                placeholder="Nome Completo"
                error={errors.name}
              />
            </div>
            <div className="w-full xl:max-w-[358px]">
              <Input
                name="phone"
                type="text"
                value={fields.phone}
                onChange={handleChange}
                placeholder="Telefone"
                error={errors.phone}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:max-w-[358px]">
              <Input
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="E-mail"
                error={errors.email}
              />
            </div>
            <div className="w-full xl:max-w-[358px]">
              <Input
                name="companyName"
                type="text"
                value={fields.companyName}
                onChange={handleChange}
                placeholder="Nome da Empresa"
                error={errors.companyName}
              />
            </div>
          </div>
          <div className="w-full xl:max-w-[732px]">
            <Input
              name="message"
              type="text"
              value={fields.message}
              onChange={handleChange}
              placeholder="Mensagem"
              as="textarea"
              error={errors.message}
            />
          </div>
          <div className="w-full xl:max-w-[732px] flex flex-row-reverse">
            <button
              className={buttonStyle}
              type="submit"
              disabled={loading}
            >
              {
                loading ? <ReloadIcon className="animate-spin w-6 h-6" /> : 'ENVIAR'
              }
            </button>
          </div>
        </form>

        <div className="hidden xl:flex w-full items-center justify-center">
          <img src={formCar} alt="" />
        </div>
      </div>
    </div>
  )
}
