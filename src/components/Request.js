import React from 'react'
import Header from './common/Header'

const RequestForm = () => (
  <form className="request-form-form">
    <label>
      <b>Location</b>
      <input type="text" name="location" placeholder="Where would you like to see Mobike?"/>
    </label>
    <label>
      <b>Purpose</b>
      <select name="purpose">
        <option value disabled>What do you use Mobike for?</option>
        <option value="0">Leisure</option>
        <option value="1">To the MRT</option>
        <option value="2">To the bus stop</option>
        <option value="3">To run errands</option>
        <option value="4">To the shopping malls</option>
        <option value="5">To school</option>
        <option value="6">To office</option>
        <option value="7">To go home</option>
        <option value="8">Other</option>
      </select>
    </label>
    <label>
      <b>Comments</b>
      <textarea name="comment" placeholder="Tell me anything!"></textarea>
    </label>
    <button type="submit">submit</button>
  </form>
)

const RequestFormContent = () => (
  <section className="request-form-content">
    <h2 className="request-form-content-title">
      Request bikes near your home, office, school or anywhere in your area!
    </h2>
    <p className="request-form-content-subtitle">
      Submission of requests will assist Mobike to better allocate bikes to your area.
    </p>
    <RequestForm />
  </section>
)

const Request = () => {
  const requestStyle = {
    backgroundImage: "url(https://mobike.com/global/public/request_form_hero.jpg)"
  }
  return (
    <section className="request-form">
      <Header isIndex={false} style={requestStyle} title="I WANT MOBIKE HERE" />
      <RequestFormContent />
    </section>
  )}

export default Request