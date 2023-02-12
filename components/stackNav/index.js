import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import PropTypes from "prop-types";

const Stack = createNativeStackNavigator();

const StackNav = (props) => {
	
	const {config, ...lastProps} = props;
	
	return (
		<Stack.Navigator style={styles.stackNav} {...lastProps}>
			{Array.isArray(config) && config.map((tab) => {
				const {name, component, ...lastTabProps} = tab;
				return component ?
					(<Stack.Screen key={name} name={name} component={component} {...lastTabProps}/>) :
					(<Stack.Screen key={name} name={name} {...lastTabProps}>
						{() => props.children}
					</Stack.Screen>);
			})}
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	stackNav: {
		flex: 1,
	},
});

StackNav.defaultProps = {};
StackNav.propTypes = {};

export default React.memo(StackNav);
