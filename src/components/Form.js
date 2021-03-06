import React from "react";
import { useForm } from "react-hook-form";
import M from "materialize-css";
import Modal from "components/Modal";
// Utils
import { FORM } from "utils/constants/Contants";

export default function Form() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const elems = document.getElementById("modal");
    const instance = M.Modal.init(elems, {});
    instance.open();
    setTimeout(() => {
      instance.close();
      reset();
    }, 5000);
  };

  return (
    <React.Fragment key="form">
      <section className="container">
        <div className="row">
          <div className="col s12 l6 offset-l3">
            <form onSubmit={handleSubmit(onSubmit)} className="card-panel">
              <div className="input-field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="validate"
                  ref={register({
                    required: {
                      value: true,
                      message: FORM.REQUIRED,
                    },
                  })}
                />
                <label htmlFor="last_name">{FORM.NAME}</label>
                {errors.name && (
                  <span className="red-text">{errors.name.message}</span>
                )}
              </div>
              <div className="input-field">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="validate"
                  ref={register({
                    required: {
                      value: true,
                      message: FORM.REQUIRED,
                    },
                  })}
                />
                <label htmlFor="email">{FORM.EMAIL}</label>
                {errors.email && (
                  <span className="red-text">{errors.email.message}</span>
                )}
              </div>
              <div className="input-field">
                <input
                  id="cellphone"
                  name="cellphone"
                  type="text"
                  className="validate"
                  ref={register({
                    required: {
                      value: true,
                      message: FORM.REQUIRED,
                    },
                  })}
                />
                <label htmlFor="cellphone">{FORM.CELLPHONE}</label>
                {errors.cellphone && (
                  <span className="red-text">{errors.cellphone.message}</span>
                )}
              </div>
              <div className="input-field">
                <input
                  id="age"
                  name="age"
                  type="number"
                  className="validate"
                  ref={register({
                    required: {
                      value: true,
                      message: FORM.REQUIRED,
                    },
                  })}
                />
                <label htmlFor="age">{FORM.AGE}</label>
                {errors.age && (
                  <span className="red-text">{errors.age.message}</span>
                )}
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      <div id="modal" className="modal">
        <Modal />
      </div>
    </React.Fragment>
  );
}
