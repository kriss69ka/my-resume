import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

const BlockItemInput = styled(Field)`
  margin: 5px 0;
  width: 100%;
`;

const BlockWrapper = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  padding: 15px;
`;

const SaveButton = styled.button`
  text-align: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  color: black;
`;

export default function EditPage() {
  const {
    id,
    firstName,
    lastName,
    dateBirth,
    profession,
    text,
    imgUrl,
    address,
    aboutMeText,
    phone,
    email,
    linkIg,
    linkGithub,
    linkVk,
    education,
    work,
    skills
  } = useSelector(state => state.userData);
  const initialState = {
    name: firstName,
    lastName,
    dateBirth,
    profession,
    mainText: text,
    imgUrl,
    address,
    aboutMeText,
    phone,
    email,
    inst: linkIg,
    github: linkGithub,
    vk: linkVk
  };
  const [allEducation, setEducation] = useState(education);
  const [allWorks, setWorks] = useState(work);
  const [allSkills, setSkills] = useState(skills);
  const [saved, setSaved] = useState(false);

  const handleSubmit = formState => {
    const user = {
      id: id,
      lastName: formState.lastName || "",
      firstName: formState.name || "",
      dateBirth: formState.dateBirth || "",
      profession: formState.profession || "",
      text: formState.mainText || "",
      imgUrl: formState.imgUrl || "",
      address: formState.address || "",
      aboutMeText: formState.aboutMeText || "",
      phone: formState.phone || "",
      email: formState.email || "",
      linkIg: formState.inst || "",
      linkGithub: formState.github || "",
      linkVk: formState.vk || "",
      education: allEducation || [],
      work: allWorks || [],
      skills: allSkills || []
    };

    axios({
      method: "post",
      url: "/api/edit",
      data: {
        userInfo: user
      }
    }).then(setSaved(true));
  };
  return saved ? (
    <Redirect to={`/main/${id}`} />
  ) : (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialState}
      render={({ handleSubmit, form, submitting, pristine, values }) => {
        const formState = form.getState();
        return (
          <StyledForm onSubmit={handleSubmit}>
            <BlockItemInput name="name" component="input" placeholder="Имя" />
            <BlockItemInput
              name="lastName"
              component="input"
              placeholder="Фамилия"
            />
            <BlockItemInput
              name="dateBirth"
              component="input"
              placeholder="Дата рождения"
            />
            <BlockItemInput
              name="profession"
              component="input"
              placeholder="Профессия"
            />
            <BlockItemInput
              name="mainText"
              component="input"
              placeholder="Текст на главной"
            />
            <BlockItemInput
              name="imgUrl"
              component="input"
              placeholder="Урл картинки на главной"
            />
            <BlockItemInput
              name="address"
              component="input"
              placeholder="Адрес"
            />
            <BlockItemInput
              name="aboutMeText"
              component="input"
              placeholder="Текст обо мне"
            />
            <BlockItemInput
              name="phone"
              component="input"
              placeholder="Телефон"
            />
            <BlockItemInput
              name="email"
              component="input"
              placeholder="Почта"
            />
            <BlockItemInput
              name="inst"
              component="input"
              placeholder="Ссылка инстаграм"
            />
            <BlockItemInput
              name="vk"
              component="input"
              placeholder="Ссылка вконтакте"
            />
            <BlockItemInput
              name="github"
              component="input"
              placeholder="Ссылка гитхаб"
            />
            <SectionWrapper>
              <div>
                <BlockItemInput
                  name="educationName"
                  component="input"
                  placeholder="Где учился"
                />
                <BlockItemInput
                  name="educationDateFrom"
                  component="input"
                  placeholder="c какого года"
                />
                <BlockItemInput
                  name="educationDateTo"
                  component="input"
                  placeholder="по какой год"
                />
                <BlockItemInput
                  name="educationPosition"
                  component="input"
                  placeholder="позиция"
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    setEducation([
                      ...allEducation,
                      {
                        name: formState.values.educationName,
                        dateFrom: formState.values.educationDateFrom,
                        dateTo: formState.values.educationDateTo,
                        position: formState.values.educationPosition
                      }
                    ]);
                  }}
                >
                  Добавить
                </button>
              </div>
              <BlockWrapper>
                {allEducation &&
                  allEducation.map(education => (
                    <ul key={education.name}>
                      <li>{education.name}</li>
                      <li>
                        {education.dateFrom}-{education.dateTo}
                      </li>
                      <li>{education.position}</li>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          setEducation(
                            allEducation.filter(i => i.name !== education.name)
                          );
                        }}
                      >
                        Удалить
                      </button>
                    </ul>
                  ))}
              </BlockWrapper>
            </SectionWrapper>
            <SectionWrapper>
              <div>
                <BlockItemInput
                  name="workName"
                  component="input"
                  placeholder="Где работал"
                />
                <BlockItemInput
                  name="workDateFrom"
                  component="input"
                  placeholder="c какого года"
                />
                <BlockItemInput
                  name="workDateTo"
                  component="input"
                  placeholder="по какой год"
                />
                <BlockItemInput
                  name="workPosition"
                  component="input"
                  placeholder="позиция"
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    setWorks([
                      ...allWorks,
                      {
                        name: formState.values.workName,
                        dateFrom: formState.values.workDateFrom,
                        dateTo: formState.values.workDateTo,
                        position: formState.values.workPosition
                      }
                    ]);
                  }}
                >
                  Добавить
                </button>
              </div>
              <BlockWrapper>
                {allWorks &&
                  allWorks.map(work => (
                    <ul key={work.name + work.position}>
                      <li>{work.name}</li>
                      <li>
                        {work.dateFrom}-{work.dateTo}
                      </li>
                      <li>{work.position}</li>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          setWorks(allWorks.filter(i => i.name !== work.name));
                        }}
                      >
                        Удалить
                      </button>
                    </ul>
                  ))}
              </BlockWrapper>
            </SectionWrapper>
            <SectionWrapper>
              <BlockItemInput
                name="skills"
                component="input"
                placeholder="Навыки"
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  setSkills([...allSkills, formState.values.skills]);
                }}
              >
                добавить
              </button>
              <BlockWrapper>
                {allSkills &&
                  allSkills.map(skill => (
                    <div key={skill} style={{ margin: "10px" }}>
                      <div>{skill}</div>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          setSkills(allSkills.filter(i => i !== skill));
                        }}
                      >
                        Удалить
                      </button>
                    </div>
                  ))}
              </BlockWrapper>
            </SectionWrapper>
            <SaveButton type="submit">Сохранить</SaveButton>
          </StyledForm>
        );
      }}
    />
  );
}
