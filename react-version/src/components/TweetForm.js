import React from 'react'

const TweetForm = () => {
  const question = "What are you humming about?";

  const handleSubmit = (event) => {
    console.log("line 7", event)
    event.preventDefault();
  }
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
        <textarea className="form__textarea" name="text" placeholder={question}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  )
}

export default TweetForm