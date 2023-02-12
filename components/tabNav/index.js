import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import PropTypes from "prop-types";

const Tab = createBottomTabNavigator();

const TabNav = (props) => {
	
	const {config, ...lastProps} = props;
	
	return (
		<Tab.Navigator style={styles.tabNav} {...lastProps}>
			{Array.isArray(config) && config.map((tab) => {
				const {name, component, ...lastTabProps} = tab;
				return component ?
					(<Tab.Screen key={name} name={name} component={component} {...lastTabProps}/>) :
					(<Tab.Screen key={name} name={name} {...lastTabProps}>
						{() => props.children}
					</Tab.Screen>);
			})}
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	tabNav: {
		flex: 1,
	},
});

TabNav.defaultProps = {};
TabNav.propTypes = {};

export default React.memo(TabNav);
