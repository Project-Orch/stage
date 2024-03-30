import { toast, Toaster, ExternalToast } from 'sonner'
import { colors } from '@stage-lib/tokens'
import {
  Info,
  Warning,
  WarningOctagon,
  CheckCircle,
} from '@phosphor-icons/react'
import {
  containerStyle,
  contentStyle,
  descriptionStyle,
  iconStyle,
  titleStyle,
  toastStyle,
} from './styles'

export const alert = {
  message: (message: string | React.ReactNode, data?: ExternalToast) =>
    toast.message(message, data),
  info: (message: string | React.ReactNode, data?: ExternalToast) =>
    toast.info(message, data),
  success: (message: string | React.ReactNode, data?: ExternalToast) =>
    toast.success(message, data),
  warning: (message: string | React.ReactNode, data?: ExternalToast) =>
    toast.warning(message, data),
  error: (message: string | React.ReactNode, data?: ExternalToast) =>
    toast.error(message, data),
}

export const Alert = () => {
  return (
    <Toaster
      toastOptions={{
        className: containerStyle,
        classNames: {
          toast: toastStyle,
          content: contentStyle,
          title: titleStyle,
          description: descriptionStyle,
          icon: iconStyle,
        },
      }}
      icons={{
        info: <Info size={22} />,
        warning: <Warning size={22} />,
        error: <WarningOctagon size={22} />,
        success: <CheckCircle size={22} />,
      }}
    />
  )
}
