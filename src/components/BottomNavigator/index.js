import React, { Component } from 'react'
import { ScrollNavigator, NavigatorContent, NavigatorBox, Title, Icon } from './styled'
import { indicator, deposit, transfer, ajust, card, payment, block } from '../../../assets/imgs'

class BottomNavigator extends Component {
    // Setei os items no state local, mas o indicado é que isto venha como props para este componente. 
    // Provavelmente os items serão buscados via serviço.
    state = {
        menuItems: [
            { name: 'Indicar amigos', source: indicator },
            { name: 'Depositar', source: deposit },
            { name: 'Transferir', source: transfer },
            { name: 'Ajustar Limite', source: ajust },
            { name: 'Cartão virtual', source: card },
            { name: 'Pagar', source: payment },
            { name: 'Bloquear cartão', source: block },
        ],
    }
    // Essa função será a responsável por renderizar os items
    renderMenusItems = ({ name, source }, index) => (
        <NavigatorBox key={`${name}-${index}`}>
            <Icon height={40} width={40} source={source} />
            <Title>{name}</Title>
        </NavigatorBox>
    )

    render() {
        const { menuItems } = this.state

        return (
            <NavigatorContent>
                <ScrollNavigator
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {menuItems.map(this.renderMenusItems)}

                </ScrollNavigator>
            </NavigatorContent>

        )
    }
}

export default BottomNavigator