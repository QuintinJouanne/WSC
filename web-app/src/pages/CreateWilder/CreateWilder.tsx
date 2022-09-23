import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionTitle } from '../../styles/base-styles';
import { getErrorMessage } from '../../utils';
import Select from 'react-select';

import { createWilder } from './rest';

const CreateWilder = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsValue, setSkillsValue] = useState<optionsType[] | unknown>(null);
  const [schoolValue, setSchooValue] = useState<optionsType | unknown>(null);

  const skillsOptions = [
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Paris', label: 'Paris' },
  ];

  const schoolOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'PHP', label: 'PHP' },
  ];

  const submit = async () => {
    try {
      await createWilder(firstName, lastName, school, skills);
      toast.success(`Wilder ${firstName} ${lastName} créé avec succès.`);
      setFirstName('');
      setLastName('');
      setSchool('');
      setSkillsValue(null);
      setSchooValue(null);
    } catch (error) {
      console.log('error caught ????');
      toast.error(getErrorMessage(error));
    }
  };

  const handleChangeSkills = (data: optionsType[]) => {
    setSkillsValue(data);

    let skills: string[] = data.map((skill) => skill.value);
    setSkills(skills);
  };

  const handleChangeSchool = (data: optionsType) => {
    setSchooValue(data);

    let schoolName = data.value;
    setSchool(schoolName);
  };

  type optionsType = {
    value: string;
    label: string;
  };

  return (
    <>
      <SectionTitle>Ajouter un nouveau Wilder</SectionTitle>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <label>
          Prénom
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Nom
          <br />
          <input
            type="text"
            required
            id="firstName"
            name="lastName"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </label>
        <br />
        <Select
          options={schoolOptions}
          value={schoolValue}
          onChange={(data) => handleChangeSchool(data as optionsType)}
        />
        <Select
          options={skillsOptions}
          isMulti={true}
          value={skillsValue}
          onChange={(data) => handleChangeSkills(data as optionsType[])}
        />
        <button>Valider</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateWilder;
