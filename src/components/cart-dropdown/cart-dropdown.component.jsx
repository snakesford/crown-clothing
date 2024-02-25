import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<Fragment>
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
				</div>
					<Button to='/checkout'>
						<Link className='checkout-page' to='/checkout'>
							CHECKOUT
						</Link>
					</Button>
			</div>
		</Fragment>
	)
}

export default CartDropdown;