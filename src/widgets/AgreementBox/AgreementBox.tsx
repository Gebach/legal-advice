import { Box, Typography } from '@mui/material'
import style from './style.module.scss'

function AgreementBox() {
  return (
    <Box className={`page-agreement ${style.agreement} py-24 text-white`}>
      <Typography variant="h4">СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬННЫХ ДАННЫХ, РАЗРЕШЕННЫХ К РАСПРОСТРАНЕНИЮ</Typography>
      <br />
      <Typography variant="body2">
        Настоящее Соглашение, заключаемое путем акцепта настоящей оферты и не требует подписания и действительно в
        электронном виде. Офертой считается настоящее согласие. Нажимая на кнопку «Предоставить на рассмотрение» или
        значок, подтверждающий отправку информации, Вы подтверждаете полное согласие с текстом, изложенным ниже
        (акцепт). Датой подписания Согласия признается дата нажатия на кнопку «Предоставить на рассмотрение» или дата
        нажатия значка, подтверждающего отправку документа.
      </Typography>
      <Typography variant="body2">
        Я даю согласие АНО «ТВОЕ ПРАВО» (ИНН 6500017204) и его партнерам, на обработку всех моих персональных данных,
        имеющихся в распоряжении/доступе АНО «ТВОЕ ПРАВО» и/или его партнеров (Пользователи Товарного знака по договору
        коммерческой концессии, а также иные партнёры, с кем заключены договоры), в том числе на обработку моих
        персональных данных, разрешенных к распространению для обеспечения соблюдения законов и иных нормативных
        правовых актов.
      </Typography>

      <Typography variant="body2">
        Сведения об информационных ресурсах оператора, посредством которых будут осуществляться предоставление доступа
        лицам и иные действия с персональными данными субъекта персональных данных:
      </Typography>

      <Typography variant="body2" fontWeight={700}>
        - электронная корпоративная почта: mail
      </Typography>

      <Typography variant="body2">
        Цель обработки: оказание юридической помощи, получение рекламных материалов (акций).
      </Typography>
      <Typography variant="body2">
        Категории и перечень персональных данных, на обработку которых даю согласие: фамилия, имя, отчество, электронная
        почта и иные персональные данные, которые я предоставлю самостоятельно.
      </Typography>
      <Typography variant="body2">Специальные категории персональных данных –нет.</Typography>
      <Typography variant="body2">
        Категории и перечень персональных данных, для обработки которых субъект персональных данных устанавливает
        условия и запреты, а также перечень устанавливаемых условий и запретов – отсутствуют.
      </Typography>
      <Typography variant="body2">
        Условия, при которых полученные персональные данные могут передаваться оператором, осуществляющим обработку
        персональных данных – по выбору оператора.
      </Typography>
      <Typography variant="body2">Срок действия согласия: 15 лет с даты дачи согласия.</Typography>
      <Typography variant="body2">
        В случае, если в течение указанного срока со мной будет заключен договор на оказание услуг Согласие сохраняет
        силу в течение всего срока действия каждого договора, а также в течение 15 (пятнадцати) лет с даты прекращения
        обязательств сторон по договорам.
      </Typography>
      <Typography variant="body2">
        Согласие может быть отозвано субъектом персональных данных путем обращения с заявлением, оформленным в
        письменной форме.
      </Typography>
      <Typography variant="body2">
        Оператор персональных данных предоставил мне право самостоятельно выбрать категории персональных данных,
        разрешенных для распространения.
      </Typography>
    </Box>
  )
}

export default AgreementBox
