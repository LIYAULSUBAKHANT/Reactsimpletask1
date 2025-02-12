export function Input({ type = "text", value, onChange, className }) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-2 border rounded ${className}`}
      />
    );
  }
  