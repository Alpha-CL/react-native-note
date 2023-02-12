import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
// import PropTypes from "prop-types";

const TopTab = createMaterialTopTabNavigator();

const TopTabNav = (props) => {
	
	const {config, ...lastProps} = props;
	
	return (
		<TopTab.Navigator style={styles.topTabNav} {...lastProps}>
			{Array.isArray(config) && config.map((tab) => {
				const {name, component, ...lastTabProps} = tab;
				return component ?
					(<TopTab.Screen key={name} name={name} component={component} {...lastTabProps}/>) :
					(<TopTab.Screen key={name} name={name} {...lastTabProps}>
						{() => props.children}
					</TopTab.Screen>);
			})}
		</TopTab.Navigator>
	);
};

const styles = StyleSheet.create({
	topTabNav: {
		flex: 1,
	},
});

TopTabNav.defaultProps = {};
TopTabNav.propTypes = {};

export default React.memo(TopTabNav);
