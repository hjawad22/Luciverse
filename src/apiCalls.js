export function fetchQuotes() {
   return fetch('https://lucifer-quotes.vercel.app/api/quotes/5')
        .then(res => {
            if (!res.ok) {
                throw new Error('Oops! We seem to be having some technical issues, please try again later!');
            }
            return res.json();
        })
}

