

const Smoothies = () => {
  return (
    <div>
      <h2>Smoothies Page</h2>
      <ul className="recipes">
        <li className="recipe">
          <img src="/smoothie.png" alt="smoothie recipe icon" />
          <h4>Banana Boost</h4>
          <p>Banana, Vanilla ice cream, Milk</p>
        </li>
        <li className="recipe">
          <img src="/smoothie.png" alt="smoothie recipe icon" />
          <h4>Tropical Twist</h4>
          <p>Peach, Pineapple, Apple juice</p>
        </li>
        <li className="recipe">
          <img src="/smoothie.png" alt="smoothie recipe icon" />
          <h4>Protein Packer</h4>
          <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
        </li>
      </ul>
    </div>
  )
}

export default Smoothies
