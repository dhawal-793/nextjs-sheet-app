const SheetCard = ({
  sheet,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div key={sheet._id} className="p-5 shadow bg-white">
      <p className="font-bold">{sheet.name}</p>
      <p>Belongs to : {sheet.creator?.email}</p>
      <p>Rs.{sheet.amount}</p>
      <p>Start: {sheet.startDate}</p>
      <p>End : {sheet.endDate}</p>
      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          onClick={handleEdit}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default SheetCard;