import { useFormContext } from "../Form/context/useFormContext";

interface ProductCardProps {
  imgUrl: string,
  text: string,
  align: 'top' | 'right' | 'left'
}

export function ProductCard({imgUrl, text, align}: ProductCardProps) {
  const { formRef } = useFormContext();

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      {align === "top" && (
        <div className="flex items-center justify-between px-4 pb-8">
          <div className="flex flex-col xl:w-96 bg-[#fff] border rounded-xl min-h-[500px]">
            <img
              className="rounded-t-xl"
              src={imgUrl}
              alt="Contato para Seminovos"
            />
            <p className="py-2 px-6 mt-3">{text}</p>
            <p
              onClick={handleScrollToForm}
              className="py-2 px-6 outline-none bg-transparent text-blue font-bold cursor-pointer"
            >
              Saiba mais
            </p>
          </div>
        </div>
      )}
      {align === "left" && (
        <div className="flex items-center justify-between px-4 pb-8 text-sm xl:text-base">
          <div className="flex flex-row xl:flex-col xl:w-96 bg-[#fff] border xl:rounded-xl min-h-[217px] xl:min-h-[500px]">
            <img
              className="rounded-l-xl xl:rounded-l-none xl:rounded-t-xl object-cover w-[186px] h-auto xl:w-full xl:h-auto"
              src={imgUrl}
              alt="Contato para Seminovos"
            />
            <p className="py-4 px-4 xl:px-6 xl:mt-3">
              {text}

              <span
                onClick={handleScrollToForm}
                className="block text-blue font-bold cursor-pointer py-2"
              >
                Saiba mais
              </span>
            </p>
          </div>
        </div>
      )}

      {align === "right" && (
        <div className="flex items-center justify-between px-4 pb-8 text-sm xl:text-base">
          <div className="flex flex-row-reverse xl:flex-col xl:w-96 bg-[#fff] border xl:rounded-xl min-h-[217px] xl:min-h-[500px]">
            <img
              className="rounded-r-xl xl:rounded-r-none xl:rounded-t-xl object-cover w-[186px] h-auto xl:w-full xl:h-auto"
              src={imgUrl}
              alt="Contato para Seminovos"
            />
            <p className="py-4 px-4 xl:px-6 xl:mt-3">
              {text}

              <span
                onClick={handleScrollToForm}
                className="block text-blue font-bold cursor-pointer py-2"
              >
                Saiba mais
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}