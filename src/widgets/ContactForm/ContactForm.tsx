import { Box, Divider, FormControl, TextField, Typography, Stack } from '@mui/material'
import styles from './style.module.scss'
import ButtonPrimary from '../../shared/ui/ButtonPrimary/ButtonPrimary'
import PageSection from '../../shared/ui/PageSection/PageSection'
import { useEffect, useState } from 'react'
import validateField from '../../features/validate-field'
import LoadingComponent from '../../shared/ui/LoadingComponent/LoadingComponent'

function ContactForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setError] = useState({
    name: false,
    email: false,
  })
  const [isFormInvalid, setIsFormInvalid] = useState(true)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isEmailPending, setIsEmailPending] = useState(false)

  useEffect(() => {
    if (Object.values(formValues).some(value => value.trim() !== ''))
      setIsFormInvalid(Object.values(errors).some(e => e))
    else {
      setIsFormInvalid(true)
    }
  }, [errors])

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    setError({ ...errors, [e.target.name]: validateField(e.target.value, e.target.name) })
  }

  async function sendFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsEmailPending(true)

    try {
      const response = await fetch('http://localhost:3000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        setIsEmailPending(false)
        setFormValues({
          name: '',
          email: '',
          message: '',
        })
        setError({
          name: false,
          email: false,
        })
        setIsFormInvalid(true)
        setIsEmailSent(true)
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
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
          ) : isEmailSent ? (
            <Typography color="success" variant="h6">
              Заявка успешно отправлена! <br />
              Наш менеджер свяжется с Вами в ближайшее время.
            </Typography>
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
              <p className="italic leading-6 text-lg">
                121 Rock Sreet, 21 Avenue, <br /> Нью-Йорк, NY 92103-9000{' '}
              </p>
            </Box>
            <Box>
              <Typography variant="h6" className="font-semibold uppercase mb-4">
                Позвоните нам
              </Typography>
              <p className="italic leading-6 text-lg">
                1 (234) 567-891 <br /> 1 (234) 987-654{' '}
              </p>
            </Box>
            <Box>
              <Typography variant="h6" className="font-semibold uppercase mb-4">
                Часы работы
              </Typography>
              <p className="italic leading-6 text-lg">
                Понедельник-Пятница: 10:00 - 20:00 <br /> Суббота-Воскресенье: выходной
              </p>
            </Box>
          </Stack>
        </Box>
      </Box>
    </PageSection>
  )
}

export default ContactForm
