import { toast, Toaster, ExternalToast } from 'sonner'
import { colors } from '@stage-lib/tokens'
import {
  Info,
  Warning,
  WarningOctagon,
  CheckCircle,
} from '@phosphor-icons/react'
import {
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
}

export const Alert = () => {
  return (
    <Toaster
      duration={100000000000}
      toastOptions={{
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
