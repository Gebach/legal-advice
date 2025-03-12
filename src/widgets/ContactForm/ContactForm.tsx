import { Box, Divider, FormControl, TextField, Typography, Stack, Checkbox, FormControlLabel } from '@mui/material'
import styles from './style.module.scss'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { useEffect, useState } from 'react'
import validateField from '../../features/validate-field'
import LoadingComponent from '../../shared/ui/LoadingComponent/LoadingComponent'
import { Link } from '@tanstack/react-router'

function ContactForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    privacyAccess: false,
  })
  const [isFormInvalid, setIsFormInvalid] = useState(true)
  const [isEmailSentStatus, setIsEmailSentStatus] = useState<Record<string, boolean | string>>({
    isSent: false,
    status: false,
    message: '',
  })
  const [isEmailPending, setIsEmailPending] = useState(false)

  useEffect(() => {
    if (
      Object.values(errors).every(e => e === false) &&
      Object.entries(formValues)
        .filter(([key]) => key !== 'message') // Исключаем поле "message"
        .every(([_, value]) => value.trim() !== '')
    )
      setIsFormInvalid(false)
    else {
      setIsFormInvalid(true)
    }
  }, [errors])

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, type } = e.target
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value

    if (type !== 'checkbox') {
      setFormValues({ ...formValues, [name]: String(value) })
    }

    setErrors({
      ...errors,
      [name]: validateField(value, name),
    })

    console.log(value, name)
    console.log(errors)
  }

  async function sendFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsEmailPending(true)

    try {
      const response = await fetch('https://tvoepravo.online/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        setFormValues({
          name: '',
          email: '',
          message: '',
        })
        setErrors({
          name: false,
          email: false,
          privacyAccess: false,
        })
        setIsFormInvalid(true)
        setIsEmailSentStatus({
          isSent: true,
          status: true,
          message: `Заявка успешно отправлена! <br />
                    Наш менеджер свяжется с Вами в ближайшее время.`,
        })
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setIsEmailSentStatus({
        isSent: true,
        status: false,
        message: `Произошла непредвиденная ошибка <br />
                  Повторите попытку позже.`,
      })
    } finally {
      setIsEmailPending(false)
    }
  }

  return (
    <PageSection id="contact-form" classname="mb-32">
      <Box className="flex gap-0 max-md:flex-col">
        <Box
          component="form"
          className="bg-gradient-to-b from-secondary to-primary p-10 flex-1 flex flex-col justify-center items-center"
          sx={{ '& .MuiTextField-root': { m: 1 } }}
          onSubmit={e => sendFormHandler(e)}
        >
          {isEmailPending ? (
            <LoadingComponent />
          ) : isEmailSentStatus.isSent ? (
            <Typography
              color={isEmailSentStatus.status ? 'success' : 'error'}
              variant="h6"
              dangerouslySetInnerHTML={{ __html: isEmailSentStatus.message }}
            ></Typography>
          ) : (
            <FormControl className="w-11/12">
              <Typography variant="h4" className="text-white font-semibold">
                Связаться!
              </Typography>
              <Divider className="mt-4" variant="middle" sx={{ backgroundColor: 'white', height: 3 }} />

              <TextField
                label="Имя"
                placeholder="Введите Ваше имя"
                multiline
                variant="standard"
                id="name"
                name="name"
                sx={{ input: { color: '#fff' } }}
                className={styles.input}
                fullWidth
                value={formValues.name}
                onChange={e => onChangeHandler(e)}
                helperText={errors.name && 'Имя должно содержать больше 2 символов без цифр'}
                error={errors.name}
              />
              <TextField
                label="Почта"
                placeholder="Введите Вашe почту"
                multiline
                variant="standard"
                id="email"
                name="email"
                sx={{ input: { color: '#fff' } }}
                className={styles.input}
                fullWidth
                value={formValues.email}
                onChange={e => onChangeHandler(e)}
                helperText={errors.email && 'Некорректная почта'}
                error={errors.email}
              />
              <TextField
                rows={5}
                multiline
                maxRows={10}
                id="message"
                name="message"
                label="Сообщение"
                placeholder="Введите свое сообщение здесь"
                variant="standard"
                fullWidth
                value={formValues.message}
                onChange={e => setFormValues({ ...formValues, message: e.target.value })}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: 'secondary.main',
                      '&.Mui-checked': {
                        color: 'secondary.light',
                      },
                    }}
                    value="privacyAgreement"
                    id="privacyAgreement"
                    name="privacyAgreement"
                    defaultChecked
                    onChange={e => onChangeHandler(e)}
                  />
                }
                label={
                  <Typography>
                    Я согласен на{' '}
                    <Link className="transition-all underline hover:opacity-80" to="/agreement">
                      обработку персональных данных
                    </Link>
                  </Typography>
                }
              />

              <ButtonPrimary disabled={isFormInvalid} type="submit" content="Предоставить на рассмотрение" />
            </FormControl>
          )}
        </Box>
        <Box className="form-add bg-white p-10 text-black">
          <Stack spacing={4}>
            <Box>
              <Typography variant="h6" className="font-semibold uppercase mb-4">
                Адрес
              </Typography>
              <a
                href="https://yandex.ru/maps/-/CHELJB4f"
                target="_blank"
                className="italic leading-6 text-lg underline"
              >
                г. Южно-Сахалинск, ул. Карла Маркса, 16, 106 офис
              </a>
            </Box>
            <Box>
              <Typography variant="h6" className="font-semibold uppercase mb-4">
                Позвоните нам
              </Typography>
              <a href="tel:79140843300" className="italic leading-6 text-lg underline">
                +7-914-084-33-00
              </a>
            </Box>
            <Box>
              <Typography variant="h6" className="font-semibold uppercase mb-4">
                Часы работы
              </Typography>
              <p className="italic leading-6 text-lg">Ежедневно с 09:00 до 20:00</p>
            </Box>
          </Stack>
        </Box>
      </Box>
    </PageSection>
  )
}

export default ContactForm
