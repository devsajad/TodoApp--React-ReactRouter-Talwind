export const FormRow = ({ label, htmlFor, children }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm/6 font-medium text-neutral-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">{children}</div>
    </div>
  );
};
