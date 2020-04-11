import { google } from 'googleapis'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const getClient = ({ scopes }) => {
  return google.auth.getClient({
    credentials: JSON.parse(
      Buffer.from(process.env.GOOGLE_AUTH_TOKEN, 'base64').toString(
        'ascii'
      )
    ),
    scopes,
  })
}

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const addToCol = async (range, slug) => {
  const sheets = await authorizeSheets()
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: process.env.GOOGLE_SHEET_LIKES_ID,
        valueInputOption: 'LIKES_ENTERED',
        range,
        resource: {
          values: [[slug]],
        },
      },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}

async function lambdaFunction(event, context, callback) {
  try {
    const slug = JSON.parse(event.body).slug
    const sheetsRes = await addToCol('Local!F2', slug)
    return {
      statusCode: sheetsRes.status,
      body: JSON.stringify(sheetsRes),
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}

exports.handler = lambdaFunction
