import { Badge } from '../ui/badge';

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="mx-auto">
      <Badge
        variant="secondary"
        className="flex flex-row items-center gap-2 rounded-sm bg-green-600 px-2 text-white"
      >
        {message}
      </Badge>
    </div>
  );
};

export default FormSuccess;
