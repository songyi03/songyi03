import * as D from "../../data";

export const Footer = () => {
  return (
    <footer className="p-4 footer footer-center bg-primary text-primary-content">
      <div>
        <p>
          Copyright &copy 2022 - All right reserved by {D.randomCompanyName()}
        </p>
      </div>
    </footer>
  );
};
