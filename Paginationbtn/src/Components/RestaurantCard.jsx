import { Navigate, useNavigate } from "react-router-dom";

export function RestaurantCard({
  name,
  rating,
  type,
  number_of_votes,
  price_starts_from,
  id,
}) {
  const navigate = useNavigate();
  const handelclick = (id) => {
    navigate(`/restaurants/${id}`);
  };
  return (
    <tr data-testid="item" onClick={() => handelclick(id)}>
      <td data-testid="name">{name}</td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="votes">{number_of_votes}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
