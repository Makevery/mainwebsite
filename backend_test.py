#!/usr/bin/env python3

import requests
import sys
from datetime import datetime
import json

class MakeriseAPITester:
    def __init__(self, base_url="https://incept1-3dprint.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        
    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text}")
                    return True, {}
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                return False, {}
                
        except Exception as e:
            print(f"❌ FAILED - Error: {str(e)}")
            return False, {}
    
    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("API Root", "GET", "/", 200)
    
    def test_contact_form_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@makerise.com",
            "inquiry_type": "product",
            "message": "This is a test inquiry for INCEPT-1 product information."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST", 
            "/contact",
            200,
            data=contact_data
        )
        
        if success:
            # Verify response structure
            required_fields = ["id", "name", "email", "inquiry_type", "message", "created_at", "status"]
            missing_fields = [field for field in required_fields if field not in response]
            
            if missing_fields:
                print(f"⚠️  Missing response fields: {missing_fields}")
                return False, response
            
            # Verify data integrity
            if (response["name"] == contact_data["name"] and 
                response["email"] == contact_data["email"] and
                response["inquiry_type"] == contact_data["inquiry_type"] and
                response["message"] == contact_data["message"]):
                print("✅ Data integrity verified")
                return True, response
            else:
                print("❌ Data integrity check failed")
                return False, response
        
        return success, response
    
    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        invalid_data = {
            "name": "A",  # Too short
            "email": "invalid-email",  # Invalid email
            "inquiry_type": "",  # Empty
            "message": "Short"  # Too short
        }
        
        success, response = self.run_test(
            "Contact Form Validation",
            "POST",
            "/contact", 
            422,  # Validation error
            data=invalid_data
        )
        
        if success:
            print("✅ Validation working correctly")
        
        return success, response
    
    def test_get_contact_submissions(self):
        """Test getting contact form submissions"""
        return self.run_test("Get Contact Submissions", "GET", "/contact", 200)
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Create status
        status_data = {"client_name": "test_client"}
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "/status",
            200,
            data=status_data
        )
        
        if not success:
            return False
        
        # Get status checks
        success, response = self.run_test("Get Status Checks", "GET", "/status", 200)
        return success

def main():
    print("🚀 Starting Makerise Innovations API Testing")
    print("=" * 60)
    
    tester = MakeriseAPITester()
    
    # Test sequence
    tests = [
        tester.test_root_endpoint,
        tester.test_contact_form_submission,
        tester.test_contact_form_validation, 
        tester.test_get_contact_submissions,
        tester.test_status_endpoints,
    ]
    
    for test in tests:
        test()
    
    # Summary
    print("\n" + "=" * 60)
    print(f"📊 TEST SUMMARY")
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"⚠️  {tester.tests_run - tester.tests_passed} TESTS FAILED")
        return 1

if __name__ == "__main__":
    sys.exit(main())