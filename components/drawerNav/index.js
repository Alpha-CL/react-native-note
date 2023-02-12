import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
// import PropTypes from "prop-types";

const Drawer = createDrawerNavigator();

const DrawerNav = (props) => {
	
	const {config, ...lastProps} = props;
	
	return (
		<Drawer.Navigator style={styles.drawerNav} {...lastProps}>
			{Array.isArray(config) && config.map((tab) => {
				const {name, component, ...lastTabProps} = tab;
				return component ?
					(<Drawer.Screen key={name} name={name} component={component} {...lastTabProps}/>) :
					(<Drawer.Screen key={name} name={name} {...lastTabProps}>
						{() => props.children}
					</Drawer.Screen>);
			})}
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	drawerNav: {
		flex: 1,
	},
});

DrawerNav.defaultProps = {};
DrawerNav.propTypes = {};

export default React.memo(DrawerNav);
