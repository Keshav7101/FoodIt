import React, {Component} from "react";
import {Text, View, ScrollView, Image, SafeAreaView} from "react-native";
import InputSpinner from "react-native-input-spinner";
import Styles from "../Styles/SurajStyles";

export default class App extends Component {
	constructor(props) {
		super(props);
		let data = [];
		for (var i = 0; i < 10; i++) {
			data.push({
				key: String(i),
				value: Math.floor(Math.random() * 100) + 1,
			});
		}
		this.state = {
			value: 1,
			valueReal: 1.5,
			colorLeft: this.getRandomColor(),
			colorRight: this.getRandomColor(),
			data: data,
		};
	}

	getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		return (
			<SafeAreaView style={Styles.mainContainer}>
				<ScrollView style={Styles.container}>
				<View style={Styles.col}>
						<Text style={Styles.text}>Egg Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Veg Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Paneer Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Chicken Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Alu Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Paneer Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Gobhi Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
