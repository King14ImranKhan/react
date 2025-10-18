import React, { useReducer } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  city: string;
  address: string;
};

type Action = {
  field: keyof FormState;
  value: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  city: "",
  address: "",
};

function reducer(state: FormState, action: Action): FormState {
  return { ...state, [action.field]: action.value };
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: e.target.name as keyof FormState, value: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", state);
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 500,
    marginBottom: "6px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px",
    marginBottom: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={state.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={state.city}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={state.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <pre
        style={{
          background: "#f9f9f9",
          padding: "10px",
          borderRadius: "6px",
          marginTop: "15px",
        }}
      >
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default UseReducerComponent;
