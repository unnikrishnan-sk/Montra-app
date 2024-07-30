export const shadowStyles = Platform.select({
    ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -7 },
        shadowOpacity: 0.22,
        shadowRadius: 5,
    },
    android: {
        elevation: 24,
        shadowColor: '#000000',
    },
    default: {},
})