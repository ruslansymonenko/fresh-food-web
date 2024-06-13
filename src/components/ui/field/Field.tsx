import { IField } from '@/components/ui/field/field.interface';
import { Controller } from 'react-hook-form';
import cn from 'clsx';

const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <div className="mt-10">
            <label className="text-xs block mb-2 font-bold">{name.toUpperCase()}</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                className={cn(
                  'w-full bg-transparent text-sm border-b  focus:border-[#333] px-2 py-3' +
                    ' outline-none mb-2 rounded',
                  error ? 'border-rose-300' : 'border-gray-300',
                )}
                onChange={onChange}
                onBlur={onBlur}
                value={(value || '').toString()}
                {...rest}
              />
            </div>
          </div>
          {error && <div className="text-rose-600 font-bold">{error.message}</div>}
        </>
      )}
    />
  );
};

export default Field;
