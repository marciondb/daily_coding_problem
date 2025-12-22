const pii_key = ['password', 'token'];

const raw_json = `{"name": "marcio", "password": "12344", "datails":[{"sex":"male", "token": "23fsfdsdjfu2u"}, {"bla":"bla"}]}`

function isPii(value) {
  console.log(value)
  if(value != null && typeof value === 'string') {
    
    return pii_key.includes(value)

  }

  return false

}
function sanitize(key, val) {
  // check if the key is string and is pii_key, return '****'
  if(isPii(key)){
    return "*****"
  }  

  if (Array.isArray(val)) {
    console.log(val)
    return val.map(item => sanitize(null, item))
  }

  if (val != null && typeof val === 'object') {
    return Object.fromEntries(
      Object.entries(val).map(([k, v]) => [k, sanitize(k, v)])
    );
  }

  return val

}

function json_log(json_raw) {
  const parsedJson = JSON.parse(json_raw)

  const sanitizedJson = sanitize(null, parsedJson)

  return JSON.stringify(sanitizedJson)

}

try {
  const sanitized = json_log(raw_json)
  console.log(sanitized)
} catch(e) {
  console.error(`error ${e}`)
}