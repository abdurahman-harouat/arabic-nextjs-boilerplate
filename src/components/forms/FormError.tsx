import { Badge } from '../ui/badge';

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="mx-auto">
      <Badge
        variant="destructive"
        className="flex flex-row items-center gap-2 rounded-sm px-2"
      >
        {message}
      </Badge>
    </div>
  );
};

export default FormError;
