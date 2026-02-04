import { register } from '@/api/auth';
import Button from '@/components/ui/Button';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { RegisterCredentials } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterCredentials) => {
      console.log(data);
      return await register(data);
    },
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      Toast.show({
        type: 'success',
        text1: 'Registration Successful',
        text2: 'Welcome to Grind!',
      });
    },
    onError: (error) => {
      console.error('Registration failed:', error);
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        text2: 'Please check your information and try again.',
      });
    },
  });

  const onSubmit = async (data: RegisterCredentials) => {
    registerMutation.mutate(data);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background.primary, Colors.background.tertiary]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Logo/Brand Section */}
            <View style={styles.header}>
              <LinearGradient
                colors={Colors.accent.gradient.purple as [string, string]}
                style={styles.logoContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.logoText}>G</Text>
              </LinearGradient>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Start your fitness transformation today
              </Text>
            </View>

            {/* Form Section */}
            <View style={styles.form}>
              {/* Name Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>FULL NAME</Text>
                <Controller
                  control={control}
                  name="name"
                  rules={{
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputContainer, Colors.shadow.small]}>
                      <TextInput
                        style={styles.input}
                        placeholder="Cookie Monster"
                        placeholderTextColor={Colors.text.tertiary}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        autoCapitalize="words"
                        autoCorrect={false}
                      />
                    </View>
                  )}
                />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name.message}</Text>
                )}
              </View>

              {/* Age Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>AGE</Text>
                <Controller
                  control={control}
                  name="age"
                  rules={{
                    required: 'Age is required',
                    min: {
                      value: 13,
                      message: 'You must be at least 13 years old',
                    },
                    max: {
                      value: 120,
                      message: 'Please enter a valid age',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputContainer, Colors.shadow.small]}>
                      <TextInput
                        style={styles.input}
                        placeholder="25"
                        placeholderTextColor={Colors.text.tertiary}
                        value={value ? value.toString() : ''}
                        onChangeText={(text) => {
                          const numericValue = parseInt(text, 10);
                          onChange(isNaN(numericValue) ? 0 : numericValue);
                        }}
                        onBlur={onBlur}
                        keyboardType="number-pad"
                        autoCorrect={false}
                      />
                    </View>
                  )}
                />
                {errors.age && (
                  <Text style={styles.errorText}>{errors.age.message}</Text>
                )}
              </View>

              {/* Email Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>EMAIL</Text>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputContainer, Colors.shadow.small]}>
                      <TextInput
                        style={styles.input}
                        placeholder="your@email.com"
                        placeholderTextColor={Colors.text.tertiary}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                  )}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
              </View>

              {/* Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>PASSWORD</Text>
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputContainer, Colors.shadow.small]}>
                      <TextInput
                        style={styles.input}
                        placeholder="Create a strong password"
                        placeholderTextColor={Colors.text.tertiary}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                  )}
                />
                {errors.password && (
                  <Text style={styles.errorText}>
                    {errors.password.message}
                  </Text>
                )}
              </View>

              {/* Confirm Password Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>CONFIRM PASSWORD</Text>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === password || 'Passwords do not match',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputContainer, Colors.shadow.small]}>
                      <TextInput
                        style={styles.input}
                        placeholder="Confirm your password"
                        placeholderTextColor={Colors.text.tertiary}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                  )}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorText}>
                    {errors.confirmPassword.message}
                  </Text>
                )}
              </View>

              {/* Terms & Conditions */}
              <Text style={styles.terms}>
                By signing up, you agree to our{' '}
                <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>

              {/* Register Button */}
              <Button
                title="Create Account"
                onPress={handleSubmit(onSubmit)}
                variant="primary"
                size="large"
                loading={registerMutation.isPending}
                fullWidth
              />

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Login Buttons */}
              <View style={styles.socialButtons}>
                <TouchableOpacity
                  style={[styles.socialButton, Colors.shadow.small]}
                >
                  <Text style={styles.socialButtonText}>🍎</Text>
                  <Text style={styles.socialButtonLabel}>Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.socialButton, Colors.shadow.small]}
                >
                  <Text style={styles.socialButtonText}>G</Text>
                  <Text style={styles.socialButtonLabel}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign In Link */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    ...Colors.shadow.glow,
  },
  logoText: {
    fontSize: 48,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    letterSpacing: -2,
  },
  title: {
    fontSize: 32,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 8,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
    marginBottom: 8,
    letterSpacing: 1,
  },
  inputContainer: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  input: {
    height: 56,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
  },
  terms: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.tertiary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  termsLink: {
    color: Colors.accent.primary,
    fontFamily: getFontFamily('notoSans', 'medium'),
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border.primary,
  },
  dividerText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.tertiary,
    marginHorizontal: 16,
    letterSpacing: 1,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    paddingVertical: 16,
    gap: 8,
  },
  socialButtonText: {
    fontSize: 20,
  },
  socialButtonLabel: {
    fontSize: 15,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 15,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  footerLink: {
    fontSize: 15,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.accent.primary,
  },
  errorText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.accent.error,
    marginTop: 4,
  },
});
