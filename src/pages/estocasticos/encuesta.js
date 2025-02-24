import React, { useState } from "react";
import styled from "styled-components";
import { surveyData } from "./data";
import useModal from "./../../components/modal/useModal";
import Modal from "./../../components/modal/Modal";

const Encuesta = () => {
  const [formData, setFormData] = useState({});
  const [isOpen, openModal, closeModal] = useModal();
  const [modalMessage, setModalMessage] = useState({ title: "", text: "", css: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const requiredFields = [...Object.values(surveyData.qualitative), ...Object.values(surveyData.quantitative)]
      .flatMap((questions) => (questions ? questions.map((q) => q.name) : []));

    const missingFields = requiredFields.filter((key) => !formData[key]);

    if (missingFields.length > 0) {
        console.log("faltan preguntas");
      setModalMessage({ title: "Error", text: "Por favor, responde todas las preguntas.", css: "alert" });
      
      openModal();
      return;
    }

    const url = "https://script.google.com/macros/s/AKfycbw5VlDMCX-wCAtZKULQ9af0PA9eUURomjcdwKtDjJThLWu8qI4Mp7JrJh8GeeRPz2uKmw/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const text = await response.text();
      setModalMessage({ title: "¡Gracias!", text:"Dios te page por tu tiempo.", css: "ok" });
      openModal();
      setFormData({});
    } catch (error) {
        console.log("eeorr al enviar")
      setModalMessage({ title: "Error", text: "Hubo un problema al enviar los datos.", css: "alert" });
      openModal();
    }
  };

  return (
    <SurveyContainer>
      <Title>{surveyData.title}</Title>
      <Description>{surveyData.description}</Description>

      <form onSubmit={handleSubmit}>
        {Object.entries(surveyData.qualitative).map(([type, questions]) => (
          <div key={type}>
            {questions.map((q, index) => (
              <QuestionSection key={index}>
                <Question>{q.question}</Question>
                <Options>
                  {q.options.map((option, i) => (
                    <Option key={i}>
                      <input
                        type="radio"
                        name={q.name}
                        value={option}
                        checked={formData[q.name] === option}
                        onChange={handleChange}
                      />
                      {option}
                    </Option>
                  ))}
                </Options>
              </QuestionSection>
            ))}
          </div>
        ))}

        {Object.entries(surveyData.quantitative).map(([type, questions]) => (
          <div key={type}>
            {questions.map((q, index) => (
              <QuestionSection key={index}>
                <Question>{q.question}</Question>
                {q.options ? (
                  <Options>
                    {q.options.map((option, i) => (
                      <Option key={i}>
                        <input
                          type="radio"
                          name={q.name}
                          value={option}
                          checked={formData[q.name] === option}
                          onChange={handleChange}
                        />
                        {option}
                      </Option>
                    ))}
                  </Options>
                ) : (
                  <Input
                    type="number"
                    name={q.name}
                    value={formData[q.name] || ""}
                    placeholder={`Ingresa el valor en ${q.unit}`}
                    onChange={handleChange}
                  />
                )}
              </QuestionSection>
            ))}
          </div>
        ))}

        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>

      <Modal isOpen={isOpen} 
            onClose={closeModal} 
            title={modalMessage.title} 
            text={modalMessage.text} 
            css={modalMessage.css} />
    </SurveyContainer>
  );
};

export default Encuesta;

const SurveyContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  margin-top: 90px;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  font-family: "Arial", sans-serif;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const QuestionSection = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  input {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  width: 100px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
    background: #e68900;
  }
`;
