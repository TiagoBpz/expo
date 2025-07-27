import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function MenuScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo Superior */}
        <Image
          source={require('../../image/Logo.png')}
          style={styles.logo}
        />

        {/* Carrossel */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          <Image
            source={require('../../image/carrossel1.png')}
            style={styles.carouselImage}
          />
          <Image
            source={require('../../image/carrossel2.png')}
            style={styles.carouselImage}
          />
          <Image
            source={require('../../image/carrossel3.png')}
            style={styles.carouselImage}
          />
        </ScrollView>

        {/* Quem Somos */}
        <Text style={styles.title}>QUEM SOMOS?</Text>
        <Text style={styles.description}>
          O Grand Club Blue Roma é um espaço acolhedor e seguro para pessoas
          idosas, com foco em bem-estar e qualidade de vida.
        </Text>

        {/* Missão */}
        <View style={styles.section}>
          <Image
            source={require('../../image/objetivo.png')}
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>MISSÃO</Text>
          <Text style={styles.sectionText}>
            Oferecer cuidado humanizado e suporte completo às necessidades dos
            idosos, promovendo saúde, alegria e respeito.
          </Text>
        </View>

        {/* Valores */}
        <View style={styles.section}>
          <Image
            source={require('../../image/valor.png')}
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>VALORES</Text>
          <View style={styles.list}>
            <Text style={styles.bullet}>• Respeito à individualidade</Text>
            <Text style={styles.bullet}>• Segurança e conforto</Text>
            <Text style={styles.bullet}>• Humanização e empatia</Text>
            <Text style={styles.bullet}>• Valorização da vida</Text>
          </View>
        </View>

        {/* Filosofia */}
        <View style={styles.section}>
          <Image
            source={require('../../image/loc.png')}
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>FILOSOFIA</Text>
          <Text style={styles.sectionText}>
            Envelhecer com dignidade, alegria e amor, mantendo os vínculos
            familiares e o cuidado integral.
          </Text>
        </View>

        {/* Footer Institucional */}
        <View style={styles.footerInstitutional}>
          <View style={styles.footerContent}>
            <View style={styles.footerTextBlock}>
              <Text style={styles.footerTitle}>GRAND CLUB{'\n'}BLUE ROMA</Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Telefone:</Text> (41)
                99850-3482
              </Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Email:</Text>{' '}
                scarpincontabil@gmail.com
              </Text>

              <Text style={styles.footerLine}>
                <Text style={styles.footerLabel}>Endereço:</Text> Rua Luiz
                Boza, 432 - Butiatuvinha, Curitiba - PR, 82400-100
              </Text>
            </View>

            <Image
              source={require('../../image/Logo.png')}
              style={styles.footerLogo}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F4ECE1',
  },
  container: {
    backgroundColor: '#F4ECE1',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 10,
  },
  carousel: {
    width: screenWidth,
    height: 200,
    marginBottom: 24,
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D1D1D',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4A3E39',
    lineHeight: 22,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  section: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D1D1D',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#4A3E39',
    textAlign: 'center',
    lineHeight: 22,
  },
  list: {
    marginTop: 10,  
  },
  bullet: {
    fontSize: 16,
    color: '#4A3E39',
    textAlign: 'center',
    marginBottom: 4,
  },
 footerInstitutional: {
  backgroundColor: '#3A1E1E',
  width: '100%',
  paddingVertical: 16,
  paddingHorizontal: 16,
},

footerContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
},

footerTextBlock: {
  flex: 1,
},

footerTitle: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
  textTransform: 'uppercase',
},

footerLine: {
  color: 'white',
  fontSize: 13,
  marginBottom: 4,
},

footerLabel: {
  fontWeight: 'bold',
  textTransform: 'uppercase',
},

footerLogo: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
  marginLeft: 12,
  marginTop: 4,
},

});
