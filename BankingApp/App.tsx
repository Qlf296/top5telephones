import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>21:28</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={16} color="#FFFFFF" />
          <Ionicons name="wifi" size={16} color="#FFFFFF" style={styles.statusIcon} />
          <Ionicons name="battery-half" size={16} color="#FFFFFF" style={styles.statusIcon} />
          <Ionicons name="share" size={16} color="#FFFFFF" style={styles.statusIcon} />
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with back arrow and transaction amount */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          <View style={styles.transactionHeader}>
            <Text style={styles.amount}>EUR -72,22</Text>
            <Text style={styles.recipient}>BCK\*SHELL HOGEWEI</Text>
            
            <View style={styles.paymentTerminal}>
              <Ionicons name="calculator" size={20} color="#FFFFFF" />
              <Text style={styles.paymentTerminalText}>Payment terminal</Text>
            </View>
          </View>
        </View>

        {/* Payment Request Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="hand-left" size={20} color="#FF6B35" />
            <Text style={styles.cardTitle}>Payment request</Text>
          </View>
          <Text style={styles.splitAmount}>Split the amount</Text>
        </View>

        {/* Transaction Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Transaction details</Text>
          <Text style={styles.date}>15 September 2025</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>From</Text>
            <View style={styles.detailValue}>
              <Text style={styles.accountName}>Hr H Belkacem</Text>
              <Text style={styles.accountNumber}>NL27 INGB 0391 3278 95</Text>
            </View>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>To</Text>
            <Text style={styles.detailValueText}>BCK\*SHELL HOGEWEI</Text>
          </View>
        </View>

        {/* Tag Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="pricetag" size={20} color="#FF6B35" />
            <Text style={styles.cardTitle}>Tag</Text>
          </View>
          <Text style={styles.addTag}>Add tag</Text>
        </View>

        {/* Description Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Description</Text>
        </View>

        {/* Bottom spacing for navigation bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#FF6B35" />
          <Text style={[styles.navText, styles.activeNavText]}>Overview</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="analytics" size={24} color="#8E8E93" />
          <Text style={styles.navText}>Insight</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.ordersContainer}>
            <Ionicons name="calendar" size={24} color="#8E8E93" />
            <View style={styles.ordersBadge}>
              <Text style={styles.ordersBadgeText}>31</Text>
            </View>
          </View>
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={24} color="#8E8E93" />
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings" size={24} color="#8E8E93" />
          <Text style={styles.navText}>Service</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'System',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 6,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  backButton: {
    marginBottom: 16,
  },
  transactionHeader: {
    alignItems: 'center',
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 6,
    fontFamily: 'System',
  },
  recipient: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'System',
  },
  paymentTerminal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
  },
  paymentTerminalText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: 'System',
  },
  card: {
    backgroundColor: '#1C1C1E',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: 'System',
  },
  splitAmount: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'System',
  },
  date: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 14,
    fontFamily: 'System',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  detailLabel: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    fontFamily: 'System',
  },
  detailValue: {
    flex: 2,
    alignItems: 'flex-end',
  },
  accountName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'System',
  },
  accountNumber: {
    color: '#8E8E93',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
    fontFamily: 'System',
  },
  detailValueText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
    fontFamily: 'System',
  },
  addTag: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'System',
  },
  bottomSpacing: {
    height: 100,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    paddingTop: 6,
    paddingBottom: 32,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#2C2C2E',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },
  navText: {
    color: '#8E8E93',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 3,
    fontFamily: 'System',
  },
  activeNavText: {
    color: '#FF6B35',
  },
  ordersContainer: {
    position: 'relative',
  },
  ordersBadge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: '#FF6B35',
    borderRadius: 9,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ordersBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'System',
  },
});