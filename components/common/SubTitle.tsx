const SubTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center flex items-center justify-center">
      <h2 className="bg-secondary-light text-secondary text-[16px] px-4 py-1 rounded-[5px]">
        {title}
      </h2>
    </div>
  );
};

export default SubTitle;
