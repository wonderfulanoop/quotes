import React, {useState, useEffect}  from "react";
import {Card, Badge} from 'react-bootstrap'


const Quotes = () => {
  const[quotes, setQuotes] = useState([]);

  useEffect(()=>{
    fetchQuotes()
  }, [])

  function fetchQuotes() {
        const url = "https://type.fit/api/quotes"
        fetch(url).then((res)=>{
          return res.json()
        }).then((data)=>{
          setQuotes(data)
        }).catch((err)=>{
          console.log(err);
        })
  }


  return (
    <div className="container">
          {quotes && quotes.map((quote, idx)=>{
            return (
              <div key={idx} className=" mt-sm-2 mb-sm-2" >
                  <Card className="">
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted"><b>Author :</b> {quote.author}</Card.Title>
                        <Card.Text><b>Quote : </b>{quote.text}</Card.Text>
                    </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">Write me your favourite quote at <Badge as="div" className="pt-sm-2 pb-sm-2 mr-sm-2 ml-sm-2" variant="success"><b>anoop18@navgurukul.org</b></Badge></small>
                      </Card.Footer>
                    </Card>
              </div>
            )
          })}
    </div>
  )
};

export default Quotes;
